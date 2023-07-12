const {UserRepository} = require('../repository')


class UserService {
     constructor() {
          this.userRepository = new UserRepository();
     }
     async signUp(data) {
           try {
                const user = await this.userRepository.create(data);
                return user;
           }

           catch(error) {

               throw error;
           }
     }

     async signIn(data) {
          try {
            const email = data.email;
            const currentPassword = data.password;
            const user = await this.userRepository.findBy({email: email});
            ///console.log("user found",user)
            if(!user) {
                  throw {
                      message: "No user Found"
                  }
            }
            if(!user.comparePassword(currentPassword)) {
                  throw {
                    message: 'Incorrect password'
                  }
            }
            console.log("user signed in successfully")
            const token = user.genJwt();
            return token;

          }
          catch(error) {
            throw error;
          }
     }
}

module.exports = UserService;