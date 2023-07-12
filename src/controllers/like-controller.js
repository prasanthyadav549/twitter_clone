const {LikeService} =require('../services')
const likeService = new LikeService();
const {StatusCodes} = require('http-status-codes')

async function toggleLike(req,res) {
       try {
        const data = req.body;
        const response = await likeService.toggleLike(data.modelId,data.modelType,data.user)
     //   console.log('like toggle response',response);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully toggled a Like",
            data: response,
            err:{}
        })
       }
       catch(error) {
           console.log("error in finding the")
           return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error Encountered in toggeling a Like",
            data: {},
            err:error
           })
       }
}

module.exports = {
    toggleLike,
}
