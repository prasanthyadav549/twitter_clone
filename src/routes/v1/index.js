const {tweetController} = require('../../controllers')
const express = require('express')
const router = express.Router();

router.post('/tweet',tweetController.createTweet);
router.get('/tweets',(req,res)=> {
        res.status(200).json({
              data: [1,3,4,5],
              success: true
        })
})

module.exports = router;