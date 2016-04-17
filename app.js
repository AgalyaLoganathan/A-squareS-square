var express = require('express')
    , http = require('http')
    , path = require('path')
    , fs = require('fs')
    , _ = require('underscore')
    , mongoDb = require('mongoose')
    , bodyParser = require('body-parser');


var app = express();
var router = express.Router();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('/views', express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db connection
mongoDb.connect('mongodb://localhost/quiz_of_the_day');
var connection = mongoDb.connection;

// db setup
var userSchema = new mongoDb.Schema({
  userName: { type: String },
  emailId: { type: String },
  role : { type: String },
  password : { type: String }
});
var User = mongoDb.model('User', userSchema);

var courseSchema = new mongoDb.Schema({
  courseName: { type: String },
  courseCode: { type: String },
  instructorName: { type: String }
});
var Course = mongoDb.model('Course', courseSchema);

var studentEnrollmentSchema = new mongoDb.Schema({
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String }
});
var StudentCourse = mongoDb.model('StudentCourse', studentEnrollmentSchema);

var studentPerformanceSchema = new mongoDb.Schema({
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String },
  totalScore: Number,
  studentScore: Number,
  subTopic: { type: String },
  strengthCategory: { type: String },
  questionId: Number
});
var StudentPerformance = mongoDb.model('StudentPerformance', studentPerformanceSchema);

// current user
var currentUser = {}
app.get('/', function(req, res){
    res.render('login.ejs');
});

app.post("/login", function(req, res){
    console.log(req.body);
    var data = req.body;
    var userName = data['username'];
    var password = data['password'];
    User.findOne({
      "userName":userName,
      "password":password}, function(err, user){
    if(err) {
      res.render('login.ejs', {message:'Server error. Try again.'});
    }
    if(user) {
        currentUser = user;
        if(user['role'] == 'student') {
           res.render('student_screens/student_home.ejs');
        } else{
          res.render('instructor-home.ejs');
        }
    }
    else {
      res.render('login.ejs', {message:'Incorrect user name or password.'});
    }
  });
});

app.post("/register", function(req, res){
    console.log("new endpoint");
    var data = req.body;
    if(data.password != data['confirm-password']){
      res.render('login.ejs', {message:'Incorrect user name or password.'});
    }else{
        var user = new User({
          userName: data['username']
          , emailId: data['email']
          , role : data['role']
          , password : data['password']
        });
        currentUser = user;
      user.save(function(err, firstUser) {
      if (err) {
        return console.error(err);
      } else{
        if(data['role'] == 'student') {
          res.render('initial_quiz.ejs');
        } else{
          res.render('instructor-home.ejs');
        }
      }
      });
    }
});

var temp_question = {
    "question_title": "Question Title",
    "question_text": "This is the text to be answered. I pasted some random text to make it big. Individual form controls automatically receive some global styling.  There are further alternative methods of providing a label for assistive technologies, such as the aria-label, aria-labelledby or title attribute. If none of these is present, screen readers may resort to using the placeholder attribute, if present, but note that use of placeholder as a replacement for other labelling methods is not advised.",
    "question_options":[
        "option_1",
        "option_2",
        "option_3",
        "option_4"
    ]

}

app.get('/initial_quiz', function(req, res){
  res.render('initial_quiz.ejs', {"details": temp_question});
});

app.get('/testing', function(req, res){
	var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "akshay.manikandan@gmail.com",
       pass: "ENter account password"
   }
  });

  smtpTransport.sendMail({
   from: "akshay.manikandan@gmail.com", // sender address
   to: "chronicnexus11@gmail.com", // comma separated list of receivers
   subject: "Hello ✔", // Subject line
   text: "Hello world ✔" // plaintext body
  }, function(error, response){
   if(error){
       console.log(error);
    }else{
       console.log("Message sent: " + response.message);
     }
  });


});

app.get('/instructor-performance', function(req, res){
    res.render('instructor-performance.ejs');
    // res.render('student-performance.ejs');
});

app.get('/leaderboard', function(req, res){
    res.render('leaderboard.ejs');
});
/* student screen */
app.get('/student_home', function(req, res){
    res.render('student_screens/student_home.ejs');
});

app.get('/student_course', function(req, res){
    res.render('student_screens/student_course.ejs');
});

app.get('/student_performance', function(req, res){
    res.render('student_screens/student_performance_landing_page.ejs');
});

/* end of student screen */
app.post('/instructor-home', function(req, res){
    res.render('instructor-home.ejs');
});

app.get('/instructor-home', function(req, res){
    res.render('instructor-home.ejs');
});

app.get('/add-quiz', function(req, res){
  res.render('add-quiz.ejs');
});

app.get('/test', function(req, res){
  res.render('stacked-chart.ejs');
});

app.get('/test2', function(req, res){
  res.render('stud-performance-by-topic.ejs');
});

app.get('/test3', function(req, res){
  res.sendFile(__dirname+'/views/by-topic.html');
});

app.post('/dashboard', function(req, res){
    res.render('dashboard.ejs', {'name': req.body.name});
});


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

