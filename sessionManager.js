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
// const option = {
//    socketTimeoutMS: 30000,
//    keepAlive: true,
//    reconnectTries: 30000,
// useNewUrlParser: true
// };

// mongoose.connect(mongoURI, option);
// mongoose.connect('mongodb+srv://admin:bro123@cluster1-27uee.mongodb.net/test?retryWrites=true&w=majority', );
mongoose.connect('mongodb+srv://admin:bro123@cluster1-27uee.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});


app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited Session Management " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Inside Session Management");
   }
});

app.post('/put_user_into_session', function (req, res, next) {
  
  var sessionData = {
   user: req.body.user, 
   end: new Date(), 
   session: {
      description: req.body.session.description,
      date: req.body.session.date,
      radar: req.body.session.radar
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
      res.status(200).json({"userSessions":session})
   })
   
})

app.listen(4001);
