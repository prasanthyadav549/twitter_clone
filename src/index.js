const express = require('express');
const {ServerConfig,Connect } =require('./config')
const {Tweet , Hashtag } = require('./models') 
const {TweetRepository} = require('./repository')
const apiRoutes = require('./routes')
 

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', apiRoutes)

app.listen(ServerConfig.PORT, async ()=> {
       console.log('Server started on Port :', ServerConfig.PORT);
        Connect()
       // await Tweet.create({
       //        content: 'india vs australia',
       //        likes: 10,
       //        noOfReTweets: 0,
       //        comment: 'happy coding' 
       //  })


       // await Hashtag.create({
       //        text: 'travel',
       //        tweets: ['648aa6744f1d388c191cbcff']
       // })

      
      
})