const {LikeRepository, TweetRepository} = require('../repository')

class LikeService {
     
    constructor() {
          this.likeRepository = new LikeRepository();
          this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId) {
        let likeable;
        if(modelType === 'Tweet') {
              likeable = await this.tweetRepository.get(modelId);
        }
        else if(modelType === 'Comment') {
             // Todo
        }
        else {
            console.log("wrong modelType");
        }
        const exists = await this.likeRepository.findByUserLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        })
        console.log("already present",exists);
        let isAdded;
        if(exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            this.likeRepository.destroy(exists.id);
            isAdded = false;
        }
        else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            })
            console.log('new like created', newLike)
            likeable.likes.push(newLike)
            await likeable.save();
            isAdded = true;
        }

        console.log('like added of deleted', isAdded)
        return isAdded;

    }
}

module.exports = LikeService;