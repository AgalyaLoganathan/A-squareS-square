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
  topic: {type: String},
  subTopic: { type: String },
  strengthCategory: { type: String },
  questionId: Number,
  submittedAnswer: {type: String},
  isCorrect: Boolean,
  weekId: Number
});
var StudentPerformance = mongoDb.model('StudentPerformance', studentPerformanceSchema);

var studentInitialQuizSchema = new mongoDb.Schema({
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String },
  questionId: Number,
  topic: { type: String },
  subTopic: { type: String },
  isCorrect: Boolean
});
var StudentInitialQuiz = mongoDb.model('StudentInitialQuiz', studentInitialQuizSchema);

// test data population
app.get('/populateTestData', function(req, res){
  new StudentCourse({
    studentName: "s1",
    studentEmail: "s1@asu.edu",
    courseCode: "CSE 280 - Intro to JAVA Programming"
  }).save();
});


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
          var userDetails = {
            'userName' : currentUser["userName"]
          }
          res.render('student_screens/dashboard.ejs', userDetails);
        } else{
          res.render('instructor-home.ejs');
        }
    }
    else {
    //   res.render('login.ejs', {message:'Incorrect user name or password.'});
    res.render('student_screens/dashboard.ejs');
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

app.get('/initial_quiz', function(req, res){
  res.render('initial_quiz.ejs');
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

/* save initial quiz */
app.post('/save_initial_quiz', function(req, res){
 console.log("Entered server");
 var answers = req.body.data;
 console.log(answers);
 _.each(answers, function(ans){
  var answer = new StudentInitialQuiz({
      'questionId' : ans['questionNumber'],
      'topic' : ans['topic'],
      'subTopic' : ans['subTopic'],
      'isCorrect' :  ans['isCorrect'],
      'studentName' : currentUser['studentName'],
      'studentEmail' : currentUser['studentEmail'],
      'courseCode' : currentUser['courseCode']
  });
  answer.save(function(err){
    if(err){
      console.log("Error in saving quiz");
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
 });
})  ;

/* student screen */
app.get('/student_home', function(req, res){
    var userDetails = {
            'userName' : currentUser["userName"]
          }
    res.render('student_screens/dashboard.ejs', userDetails);
});

app.get('/student_course', function(req, res){
    res.render('student_screens/student_course.ejs');
});

app.get('/student_performance', function(req, res){
    res.render('student_screens/student_performance_landing_page.ejs');
});

app.get('/student_profile', function(req, res){
  var userProfile = currentUser;
  User.findOne({'userName': 's1'}, function(err, userProfile){
  StudentCourse.findOne({'studentName': userProfile['userName']}, function(err, userCourseDetails){
    console.log("Course Details");
    console.log(userCourseDetails);
    userProfile['courseCode'] = userCourseDetails['courseCode'];
    console.log(userProfile);
    res.render('student_screens/student_profile.ejs', userProfile);
  });
  });
});

app.get('/study_groups', function(req, res){
var currentWeekId = 5;
var countOfCorrectAnswers = 0;
var totalQuestions = 0;
 User.findOne({'userName': 's1'}, function(err, user){
    StudentPerformance.find({
    'userName': user['userName'],
    'weekId': currentWeekId,
    }, function(err, performances){
      _.each(performances, function(performance){
        if(performance['isCorrect']) {
          countOfCorrectAnswers+1;
        }
        totalQuestions+1;
      });
    if(countOfCorrectAnswers/2 < totalQuestions){
      // do a Study Group Recommendation for that week
      var tutors = getTutorStudents(performances[0][topic]);
        if(tutors > 0) {
            res.json(tutors);
        }else{
          res.render("student_screens/study_groups.ejs",
            {'message': 'We dont have any tutors to help you'}
            );
        }
    } else{
            res.render("student_screens/study_groups.ejs",
            {'message': 'You dont need any study groups'}
            );
      // Display you dont have any study group recommendations for this week
    }
    });
});
});

var getTutorStudents = function(topic){
  var relatedTopics = [];
  var tutors= [];
  relatedTopics.push(topic);
   StudentPerformance.find({
    'strengthCategory': 'strong',
    'topic': {$all: relatedTopics}
    }, function(err, performances){
      _.each(performances, function(performance){
        tutors.append(performance['studentName']);
      });
      return _.unique(tutors);
    });
};

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
