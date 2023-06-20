const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
       email: {
          type: string,
          required: true,
          unique: true
       },

       password: {
           type: string,
           required: true
       },

       bio: {
        type: String
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    name:{        
        type: String
    
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;