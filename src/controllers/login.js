import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import responseModels from 'httpstatusresponse';

 class LoginController {
    constructor(User) {
        this.User = User;
    };

    login(req, res) {

        this.User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length < 1) {
                    return responseModels.authFail(res);
                }
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        return responseModels.authFail(res);
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                email: user[0].email,
                                id: user[0]._id
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: '1h'
                            }
                        );
                        return responseModels.getSuccess(res, {
                            message: "Auth success",
                            token: token
                        });
                    }
                    return responseModels.authFail(res);
                });
            })
            .catch(err => responseModels.authFail(res));
    }
}

export default LoginController; 