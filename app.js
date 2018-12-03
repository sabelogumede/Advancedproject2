const express = require('express'),
app = express(),
mongodb = require('mongodb'),
mongoose = require('mongoose'),
port = process.env.PORT || 3000,
myDB = 'mongodb://localhost/advancedproject1',
User = require('./Models/users.model.js'),
UserRoutes = require('./Controller/userroutes.js'),
bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

// connect to our db
mongoose.connect(myDB);

app.use('/user', UserRoutes);// http:localhost:3000/user/<Route>

app.listen(port, (error)=>{
    if(!error){
        console.log('listening on port', port)
    }else{
        console.log(err);
    }
})