const mongoose = require('mongoose')


const tweetSchema = new mongoose.Schema({

   content: {
     type: String
   },
   likes:[
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Like'
       }
   ],
   noOfReTweets: {
      type: Number
   },

   comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
   ],

   image: {
    type: String
   },
   userId : {
      type: mongoose.Schema.Types.ObjectId,
   }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;