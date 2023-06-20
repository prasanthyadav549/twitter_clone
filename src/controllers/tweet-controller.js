const {TweetService} = require('../services')
const {StatusCodes} = require('http-status-codes')

const tweetService = new TweetService()

async function createTweet(req,res) {
      
      try {
           const response = await tweetService.create(req.body);

           return res.status(StatusCodes.CREATED).json({
                message: "success",
                success: true,
                data: response,
                error: {}
           })
      }

      catch(err) {
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong",
            success: false,
            data: {},
            error: err
          })
      }

    }

module.exports = {
       createTweet
}
