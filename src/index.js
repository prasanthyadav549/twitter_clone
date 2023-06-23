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
       console.log('aws credentials',ServerConfig.AWS_ACCESS_KEY, ServerConfig.AWS_SECRET_ACCESS_KEY,ServerConfig.AWS_REGION)
        Connect()
        
})