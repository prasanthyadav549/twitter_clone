const {User} = require('../models')
const CrudRepository = require('./crud-repository')

class UserRepository extends CrudRepository {
        
    constructor() {
         super(User)
    }
    async findBy(data) {
           try {
             const response = await User.findOne(data);
              return response;
           }
           catch(error) {
               console.log("user find error",error)
                throw error;
           }
    }
}

module.exports = UserRepository