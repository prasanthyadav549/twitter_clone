const {TweetService} = require('../services')
const {StatusCodes} = require('http-status-codes')
const {Upload} = require('../config')

const tweetService = new TweetService()

async function createTweet(req,res) {
     const singleUploader = Upload.single('image')
      
      try {
          singleUploader(req,res,async function (err,data) {
                  if(err) {
                       console.log("error uploading", err);
                  }
                  console.log("file ",req.file);
                  const payload = {...req.body};
                  payload.image = req.file.location;
                  const response = await tweetService.create(payload);
                  return res.status(StatusCodes.CREATED).json({
                       message: "success",
                       success: true,
                       data: response,
                       error: {}
                    })
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
