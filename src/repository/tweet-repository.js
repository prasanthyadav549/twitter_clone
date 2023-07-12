
const CrudRepository = require('./crud-repository')
const {Tweet} = require('../models')

class TweetRepository extends CrudRepository {

     constructor()  {
         super(Tweet)
     }

     async findByUserId(userId) {
          console.log('findByUserId Repository', userId)
            try {

                  const response = await Tweet.find({
                    userId: userId
                  })
                     console.log("response of findByUserId", response)
                  return response;
            }
            catch(error) {
                console.log('got the error while finding the tweets',error)
                throw error;
            } 
     }

}


module.exports = TweetRepository;