const express = require('express'),
app = express(),
mongodb = require('mongodb'),
mongoose = require('mongoose'),
port = process.env.PORT || 3000,
myDB = 'mongodb://localhost/advancedproject1',
User = require('./Models/users.model.js');

// connect to our db
mongoose.connect(myDB);



app.listen(port, (error)=>{
    if(!error){
        console.log('listening on port', port)
    }else{
        console.log(err);
    }
})