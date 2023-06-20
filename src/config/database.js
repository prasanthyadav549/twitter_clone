const mongoose = require('mongoose');

const connect = async () => {
   await mongoose.connect('mongodb+srv://prasanthref07:Volley%40123@cluster0.picw31f.mongodb.net/')
    console.log('mongoose connected');
}

module.exports = connect