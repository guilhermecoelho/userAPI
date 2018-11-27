import sinon from 'sinon';
import responseModels from 'httpstatusresponse';

import CheckauthController from '../../../src/controllers/checkauth';
import { StringDecoder } from 'string_decoder';

describe('Controller: CheckAuth', () => {
    describe('checkauth() method', () => {
        it('should return valid token', () =>{
            const checkauthController = new CheckauthController();

            const defaultRequest = {
                headers: {
                    authorization: ['test', 'test 2']
                }
            };

            const response = {
                status: JSON.stringify({})
            };

            //response.status.withArgs(200).returns(response);
            
            return checkauthController.checkauth(defaultRequest, response);
            sinon.assert(true);
        });
    });
});