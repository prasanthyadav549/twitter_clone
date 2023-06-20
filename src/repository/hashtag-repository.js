const CrudRepository = require('./crud-repository')
const {Hashtag}  = require('../models')

class HashtagRepository extends CrudRepository { 
constructor() {
       super(Hashtag) 
}

async bulkCreate(data) {
      try {

    const tags = await Hashtag.insertMany(data);
    return tags;

      }

      catch(error) {
          console.log("bulk error", error);
          throw error;
      }
}

// find by name 

async findByName(text) {
     try {
           let hashtag = await Hashtag.find({
               text : text
           });
           return hashtag;
     }
     catch(error) {
          console.log("find by name error: " ,  error)
          throw error;
     }
}

}

module.exports =HashtagRepository;