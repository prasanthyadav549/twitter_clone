const {UserService} = require('../services')
const {StatusCodes} = require('http-status-codes')

const userService = new UserService();

async function signUp(req,res) {
       try {
        const response = await userService.signUp(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully created a User",
            data: response,
            error:{}
        })
       }
       catch(error) {
           return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error Encountered in creating a user",
            data: {},
            err:error
           })
       }
}

async function signIn(req,res) {
      try {
        const response = await userService.signIn(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully Signed in",
            token: response,
            error:{}
        })
      }
      catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error Encountered in user SignIn",
            data: {},
            err:error
        })
      }
}

module.exports = {
       signUp,
       signIn
}