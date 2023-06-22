const {tweetController,userController,likeController} = require('../../controllers')
const express = require('express')
const router = express.Router();

router.post('/tweet',tweetController.createTweet);
router.get('/tweets',(req,res)=> {
        res.status(200).json({
              data: [1,3,4,5],
              success: true
        })
})

router.post('/sign-up',userController.signUp);
router.post('/sign-in',userController.signIn);
router.post('/likes/toggle',likeController.toggleLike)


module.exports = router;