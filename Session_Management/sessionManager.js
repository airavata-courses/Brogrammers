var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cors = require('cors')

var Session = require('./models/Session')

var app = express();

app.use(bodyParser())
app.use(cookieParser());
app.use(cors())
app.use(session({secret: "Shh, its a secret!"}));

mongoose.connect('mongodb://localhost:27017/sessionManagement', {useNewUrlParser: true});


app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});

app.post('/put_user_into_session', function (req, res, next) {
  console.log(req.body)
  var sessionData = {
   user: req.body.user,  
   data: {
      description: req.body.event_description,
      date: req.body.startDate
   }
  }

  new Session(sessionData)
  .save(function(err, done) {
     if (err)
      console.log(err)
   res.status(201).send('session saved')
  })
})

app.get('/get_user_session/:id', function (req, res, next) {
   Session.find({user: req.params.id}, function(err, data) {
      if (err) console.log(err)
      res.status(200).json(data)
   })
   
})

app.listen(3001);
