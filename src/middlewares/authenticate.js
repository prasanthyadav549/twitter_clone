const passport = require('passport')
const {StatusCodes} = require('http-status-codes')

const authenticate = (req,res,next) => {
      passport.authenticate('jwt',(err,user) => {
         console.log('fourth',err,user)
          if(err) {
             next(err);
          }
             if(!user) {
                  return res.status(StatusCodes.UNAUTHORIZED).json({
                    message: 'Unauthorized access'
                  })

             }
        
         req.user = user;
        //  console.log('request',req)
          next();
      })(req,res,next);
}

module.exports = authenticate;