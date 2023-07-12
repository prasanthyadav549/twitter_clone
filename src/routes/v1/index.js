const {tweetController,userController,likeController} = require('../../controllers')
const express = require('express')
const {Authenticate} = require('../../middlewares')
const router = express.Router();

router.post('/tweet',Authenticate,tweetController.createTweet);
router.post('/sign-up',userController.signUp);
router.post('/sign-in',userController.signIn);
router.post('/likes/toggle',Authenticate,likeController.toggleLike)
router.get('/user/tweets',Authenticate,tweetController.findByUserId)


module.exports = router;