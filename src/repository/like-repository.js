const CrudRepository = require('./crud-repository')
const {Like} = require('../models')

class LikeRepository extends CrudRepository {
  
     constructor() {
         super(Like)
     }

     async findByUserLikeable(data) {

        try {
             const like = await Like.findOne(data);
             return like;
        }

        catch(err) {
              console.log("like find error ", err);
        }

     }

}

module.exports  = LikeRepository;