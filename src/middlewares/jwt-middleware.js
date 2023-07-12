const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {ServerConfig} = require('../config')

const {User} = require('../models')

const opts = {
    jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: ServerConfig.JWT_SECRET_KEY
}

 const passportAuth = (passport) => {
       passport.use(new JwtStrategy(opts, async(jwt_payload,done) => {
        console.log('second',jwt_payload)
        const user = await User.findById(jwt_payload.id)
        if(!user) {
              done(null,false);
        }
        else {
            done(null,user);
        }
       }))
}

module.exports = passportAuth
