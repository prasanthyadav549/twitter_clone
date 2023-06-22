const {TweetRepository, HashtagRepository} = require('../repository')


class TweetService {
    
    constructor() {
          this.tweetRepository = new TweetRepository();
          this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
           const content = data.content;
           const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag)=> tag.substring(1).toLowerCase());
           const tweet = await this.tweetRepository.create(data);
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
}

module.exports = TweetService;

