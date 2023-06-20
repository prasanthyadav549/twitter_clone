const mongoose = require('mongoose')


const hashtagSchema = new mongoose.Schema({

       text: {
          type: String,
          required:true,
          unique:true
       },

       tweets : [
          {
            type: mongoose.Schema.Types.ObjectId
          }
       ]

});

const Hashtag = mongoose.model('Hashtags', hashtagSchema);

module.exports = Hashtag;