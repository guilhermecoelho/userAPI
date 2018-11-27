import jwt from 'jsonwebtoken';

import responseModels from 'httpstatusresponse';

require('dotenv').config();

 class CheckauthController {

    checkauth(req, res){
        try {
            console.log('response: ', res.json);
            //console.log('request: ',req.headers.authorization.split(' ')[1]);
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.JWT_KEY);
            req.userData = decode;
            return responseModels.authSuccess(res);
        }  catch(err){
            //return responseModels.authFail(res);
            console.log('res: ', res.json)
            return res.status(500).json({
                error: err.message
            });
        }
    }
}

export default CheckauthController; 