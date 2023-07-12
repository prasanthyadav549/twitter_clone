const {TweetRepository, HashtagRepository,UserRepository} = require('../repository')


class TweetService {
    
    constructor() {
          this.tweetRepository = new TweetRepository();
          this.hashtagRepository = new HashtagRepository();
          this.userRepository = new UserRepository();
    }

    async create(data) {
           const content = data.content;
           const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag)=> tag.substring(1).toLowerCase());
           const tweet = await this.tweetRepository.create(data);
           const user =  await this.userRepository.findById(data.userId);
           user.tweets.push()
           console.log("tweet created", tweet)
           let presentTags = await this.hashtagRepository.findByName(tags)
           console.log("already present tags", presentTags);
           let textOfPresentTags = presentTags.map((tag)=> tag.text)
           let newTags = tags.filter(tag => !textOfPresentTags.includes(tag))
           newTags = newTags.map((tag) => {
              return {
                  text: tag,
                  tweets: [tweet._id]
              }
           })
           await this.hashtagRepository.bulkCreate(newTags);
           presentTags.forEach((tag)=> {
              tag.tweets.push(tweet._id)
              tag.save();
           })

         return tweet
    }

    async getTweet(tweetId) {
        const tweet = await this.tweetRepository.getTweet(tweetId);
        return tweet;
    }
    
    async findByUserId(userId) {
        console.log('findByUserId service', userId);
        try {
          const response = this.tweetRepository.findByUserId(userId);
          console.log('findByUserId service response received', response);
          return response;
        }
        catch (error) {
              throw error;
        }
    }
}

module.exports = TweetService;

