const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {ServerConfig} = require('../config')

const userSchema = new mongoose.Schema({
       email: {
          type: String,
          required: true,
          unique: true
       },

       password: {
           type: String,
           required: true
       },

       bio: {
        type: String
    },
    username:{        
        type: String,
        unique: true
    }
})

userSchema.pre('save', function (next){
          
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password,salt)
    user.password = encryptedPassword
    next()
})

userSchema.methods.comparePassword = function compare(password) {
       const user = this;
       return bcrypt.compareSync(password,user.password) 
}

userSchema.methods.genJwt = function generateJwtToken() {
       return jwt.sign({
        id: this._id,
        email: this.email,
       },ServerConfig.JWT_SECRET_KEY, {
         expiresIn: '2h'
       } )
}

const User = mongoose.model('User', userSchema);
module.exports = User;