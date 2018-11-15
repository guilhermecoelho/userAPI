import bcrypt from 'bcrypt';

import responseModels from 'httpstatusresponse';

require('dotenv').config();

class UsersController {
    constructor(User) {
        this.User = User;
    };

    create(req, res) {
        return this.User.find({ email: req.body.email })
            .then(doc => {
                if (doc.length >= 1) {
                    return responseModels.customResponse(res, 500, { message: "email already registered" });
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            responseModels.createFail(res, err);
                        } else {
                            const user = new this.User({
                                email: req.body.email,
                                password: hash
                            });
                            user.save()
                                .then(doc => responseModels.createSuccess(res, doc))
                                .catch(err => responseModels.createFail(res, err));
                        }
                    });
                }
            })
            .catch(err => responseModels.getFail(res, err));
    }
    
    remove(req, res) {
        return this.User.remove({ _id: req.params.id })
            .then(doc => responseModels.removeSuccess(res, doc))
            .catch(err => responseModels.removeFail(res, err));
    }
}

export default UsersController; 