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
  
  var sessionData = {
   user: req.body.user, 
   end: new Date(), 
   session: {
      description: req.body.event_description,
      date: req.body.event_date,
      radar: req.body.event_category
   }
  }

  console.log(sessionData)

  new Session(sessionData)
  .save(function(err, done) {
     if (err)
      console.log(err)
   res.status(201).send('session saved')
  })
})

app.get('/get_user_session/:id', function (req, res, next) {
   Session.find({user: req.params.id}, function(err, session) {
      if (err) console.log(err)
      res.status(200).json(session)
   })
   
})

app.listen(3001);
