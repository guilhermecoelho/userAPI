import jwt from 'jsonwebtoken';

import responseModels from 'httpstatusresponse';

require('dotenv').config();

 class CheckauthController {

    checkauth(req, res){
        try {
            console.log(req.headers);
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.JWT_KEY);
            req.userData = decode;
            return responseModels.authSuccess(res);
        }  catch(err){
            return responseModels.authFail(res);
        }
    }
}

export default CheckauthController; 