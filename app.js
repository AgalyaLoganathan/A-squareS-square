var express = require('express')
    , http = require('http')
    , path = require('path')
    , fs = require('fs')
    , _ = require('underscore')
    , mongoDb = require('mongoose')
    , bodyParser = require('body-parser')
    , nodemailer = require('nodemailer');


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

var QuizQuestions = new mongoDb.Schema({
  questionId: Number,
  questionText: {type: String},
  options: [{
            option1: { type: String },
            option2: { type: String },
            option3: { type: String },
            option4: { type: String }
        }],
  correctAnswer: { type: String },
  point: Number,
  difficultylevel: { type: String },
  topic: { type: String },
  subTopic: { type: String },
  isCorrect: Boolean,
  courseCode: { type: String },
  weekId: Number
});

var QuizQuestions = mongoDb.model('QuizQuestions', QuizQuestions);

var Recommendations = new mongoDb.Schema({
questionId: Number,
recommendations: [{
            recommendationId: Number,
            recommendationText: { type: String },
            is_useful: Boolean
        }]

});

var Recommendations = mongoDb.model('Recommendations', Recommendations);

var studentInitialQuizStrengthSchema = new mongoDb.Schema({
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String },
  isExpert: Boolean
});
var StudentInitialStrengthQuiz = mongoDb.model('StudentInitialStrengthQuiz', studentInitialQuizStrengthSchema);

var questionRecommendationSchema = new mongoDb.Schema({
  questionId: Number,
  recommendations : {type: Array}
  /* {
      text: "ac",
      isuseful: true/false
    } */

});
var QuestionRecommendationSchema = mongoDb.model('questionRecommendation', questionRecommendationSchema);

app.post('/updateRecommendations',  function(req, res){
    var input = req.body;
    _.each(input, function(reco){
          QuestionRecommendationSchema.update(
            {'recommendations.text' : reco.text},
            { $set:
              {
                'recommendations.isuseful': reco.isuseful
               }
            }
          );
    });
});


var courseCode = "CSE 280 - Intro to JAVA Programming";
// test data population
app.get('/populateTestData', function(req, res){
  /* new StudentCourse({
    studentName: "s1",
    studentEmail: "s1@asu.edu",
    courseCode: "CSE 280 - Intro to JAVA Programming"
  }).save(); */

  /*new StudentPerformance({
    'courseCode': 'CSE 280 - Intro to JAVA Programming',
    'studentName': 's1',
    'studentEmail': 's1@asu.edu',
    'totalScore': 10,
    'studentScore': 1,
    'topic': 'Arrays',
    'subTopic': 'Definition',
    'strengthCategory': 'Strong',
    'questionId': 100,
    'submittedAnswer': 'yes',
    'isCorrect': true,
    'weekId': 1
  }).save();

new StudentPerformance({
    'courseCode': 'CSE 280 - Intro to JAVA Programming',
    'studentName': 's1',
    'studentEmail': 's1@asu.edu',
    'totalScore': 10,
    'studentScore': 1,
    'topic': 'Arrays',
    'subTopic': 'Definition',
    'strengthCategory': 'Strong',
    'questionId': 101,
    'submittedAnswer': 'yes',
    'isCorrect': true,
    'weekId': 1
  }).save();

new StudentPerformance({
    'courseCode': 'CSE 280 - Intro to JAVA Programming',
    'studentName': 's1',
    'studentEmail': 's1@asu.edu',
    'totalScore': 10,
    'studentScore': 1,
    'topic': 'Arrays',
    'subTopic': 'Definition',
    'strengthCategory': 'Strong',
    'questionId': 102,
    'submittedAnswer': 'yes',
    'isCorrect': true,
    'weekId': 2
  }).save();

new StudentPerformance({
    'courseCode': 'CSE 280 - Intro to JAVA Programming',
    'studentName': 's1',
    'studentEmail': 's1@asu.edu',
    'totalScore': 10,
    'studentScore': 1,
    'topic': 'Arrays',
    'subTopic': 'Definition',
    'strengthCategory': 'Strong',
    'questionId': 103,
    'submittedAnswer': 'yes',
    'isCorrect': true,
    'weekId': 2
  }).save();

  new StudentPerformance({
    'courseCode': 'CSE 280 - Intro to JAVA Programming',
    'studentName': 'alogana1',
    'studentEmail': 'alogana1@asu.edu',
    'totalScore': 10,
    'studentScore': 1,
    'topic': 'Arrays',
    'subTopic': 'Definition',
    'strengthCategory': 'Strong',
    'questionId': 100,
    'submittedAnswer': 'yes',
    'isCorrect': true,
    'weekId': 1
  }).save();

new StudentPerformance({
    'courseCode': 'CSE 280 - Intro to JAVA Programming',
    'studentName': 'alogana1',
    'studentEmail': 'alogana1@asu.edu',
    'totalScore': 10,
    'studentScore': 1,
    'topic': 'Arrays',
    'subTopic': 'Definition',
    'strengthCategory': 'Weak',
    'questionId': 101,
    'submittedAnswer': 'yes',
    'isCorrect': false,
    'weekId': 1
  }).save();

new StudentPerformance({
    'courseCode': 'CSE 280 - Intro to JAVA Programming',
    'studentName': 'alogana1',
    'studentEmail': 'alogana1@asu.edu',
    'totalScore': 10,
    'studentScore': 0,
    'topic': 'Arrays',
    'subTopic': 'Definition',
    'strengthCategory': 'Weak',
    'questionId': 102,
    'submittedAnswer': 'yes',
    'isCorrect': false,
    'weekId': 2
  }).save();

new StudentPerformance({
    'courseCode': 'CSE 280 - Intro to JAVA Programming',
    'studentName': 'alogana1',
    'studentEmail': 'alogana1@asu.edu',
    'totalScore': 10,
    'studentScore': 0,
    'topic': 'Arrays',
    'subTopic': 'Definition',
    'strengthCategory': 'Weak',
    'questionId': 103,
    'submittedAnswer': 'yes',
    'isCorrect': false,
    'weekId': 2
  }).save(); */

new StudentCourse({
  'studentName': 's1',
  'studentEmail': 's1@asu.edu',
  courseCode: 'CSE 280 - Intro to JAVA Programming'
}).save();

new StudentCourse({
  'studentName': 'alogana1',
  'studentEmail': 'alogana1@asu.edu',
  courseCode: 'CSE 280 - Intro to JAVA Programming'
}).save();
});


// current user
var currentUser = {
  'userName': 's1'
}
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

// app.get('/leaderboard', function(req, res){
//     res.render('leaderboard.ejs');
// });

/* save initial quiz */
app.post('/save_initial_quiz', function(req, res){
 console.log("Entered server");
 var answers = req.body.data;
 console.log(answers);
 var count = 0;
 _.each(answers, function(ans){
  if(ans['isCorrect'] == true) {
    count++;
  }
  var answer = new StudentInitialQuiz({
      'questionId' : ans['questionNumber'],
      'topic' : ans['topic'],
      'subTopic' : ans['subTopic'],
      'isCorrect' :  ans['isCorrect'],
      'studentName' : currentUser['userName'],
      'studentEmail' : currentUser['emailId'],
      'courseCode' : courseCode
  });
  answer.save(function(err){
    if(err){
      console.log("Error in saving quiz");
      res.render('initial_quiz.ejs');
    } else {
       if(count > 8) {
        new studentInitialQuizStrengthSchema({
            studentName: currentUser['userName'],
            studentEmail: currentUser['emailId'],
            courseCode: courseCode,
            isExpert: True
        }).save();
      }
      else{
        new studentInitialQuizStrengthSchema({
            studentName: currentUser['userName'],
            studentEmail: currentUser['emailId'],
            courseCode: courseCode,
            isExpert: False
        }).save();
      }
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

app.get('/typography.ejs', function(req,res){
    res.render('student_screens/typography.ejs');
});

app.get('/table.ejs', function(req,res){
    res.render('student_screens/table.ejs');
});

app.get('/profile.ejs', function(req,res){
    res.render('student_screens/user.ejs');
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

app.get('/study_group.ejs', function(req, res){
    res.render("student_screens/study_group.ejs");
});

app.get('/dashboard.ejs', function(req, res){
    var userDetails = {
      'userName' : currentUser["userName"]
    }
    res.render("student_screens/dashboard.ejs", userDetails);
});


app.get('/get_today_question', function(req, res){
  Questions.find({
    'questionId' : currentQuestionId,
    'weekId' : currentWeekId
  });
});

app.get('/get_weekly_performance', function(req, res){
  var performances = StudentPerformance.find({
    'studentName': currentUser['userName']
  });
  var performancesByWeek = _.groupBy(performances, 'weekId');
  _.each(performancesByWeek, function(pByWeek){
      var subTopic = _.groupBy(pByWeek, 'subTopic');
  })
});

app.get('/leaderboard', function(req, res){
  // var currentUserName = currentUser['userName'];

  var currentUserName = 's1';
  // StudentCourse.findOne({'studentName': currentUserName}, function(err, user){
  //   console.log("Found user");
  //   var courseCode = user['courseCode'];
  //   console.log("course code " + courseCode);
  //   var results = StudentPerformance.group({
  //   "key": {
  //       "studentName": true
  //   },
  //   "initial": {
  //       "sumstudentScore": 0
  //   },
  //   "reduce": function(obj, prev) {
  //       prev.sumstudentScore = prev.sumstudentScore + obj.studentScore - 0;
  //   },
  //   "cond": {
  //       "courseCode": courseCode
  //   }
  // });
      var results = StudentPerformance.aggregate([
       { $match: {
        'courseCode': courseCode,
        'studentScore': 1
       }},
       { $group: { _id : '$studentName',
                  studentTotalScore:
                   { $sum: '$studentScore'}
                }
      },
      {
        $sort: {
         studentTotalScore : -1
        }
      }
    ]).exec(function ( e, d ) {
        console.log("Output ");
        results = d;
        console.log(results);
        res.render('student_screens/table.ejs', {'results': results});
        // res.json(results);
    });
});


app.get('/study_groups_test', function(req, res){
var currentWeekId = 2;
var countOfCorrectAnswers = 0;
var totalQuestions = 0;
 User.findOne({'userName': 's1'}, function(err, user){
    StudentPerformance.find({
    'studentName': user['userName'],
    'weekId': currentWeekId,
    }, function(err, performances){
      _.each(performances, function(performance){
        if(performance['isCorrect']) {
          countOfCorrectAnswers+=1;
        }
        totalQuestions+=1;
        });
       if(countOfCorrectAnswers/2 < totalQuestions){
      // do a Study Group Recommendation for that week
        getTutorStudents(performances[0]['topic'], processTutorResults);
        }
       else {
            res.render("student_screens/study_groups.ejs",
            {'message': 'You dont need any study groups'}
            );
      // Display you dont have any study group recommendations for this week
       }
  });
});
});


function processTutorResults(){
   console.log("Tutors are " + tutors);
        if(tutors && tutors.length > 0) {
            console.log("Finally " + tutors);
            res.json(tutors);
        }else{
          res.render("student_screens/study_groups.ejs",
            {'message': 'We dont have any tutors to help you'}
            );
        }
}

function getTutorStudents(topic){
  var relatedTopics = [topic];
  var tutors= [];
  relatedTopics.push(topic);
  console.log("Related topics " + relatedTopics);
   StudentPerformance.find({
    'strengthCategory': 'Strong',
    'topic': {$all: relatedTopics}
    }, function(err, performances){
      _.each(performances, function(performance){
        if(performance['studentName'] != currentUser['userName']) {
          console.log("Pushed " + performance['studentName']);
          tutors.push(performance['studentName']);
        }
      });
    console.log("Returning " + _.unique(tutors));
    return _.unique(tutors);
    });
}

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

/* test e-mail
app.post('/testing', function(req, res){
  //var transporter = nodemailer.createTransport('smtps://javatutorial.learner%40gmail.com:1a3c2b4d@smtp.gmail.com');
  var transporter = nodemailer.createTransport('smtps://javatutorial.learner%40gmail.com:1a3c2b4d@smtp.gmail.com');

var mailOptions = {
    from: 'javatutorial.learner@gmail.com', // sender address
    to: 'chronicnexus11@gmail.com,svenka64@asu.edu', // list of receivers
    subject: 'Question 1', // Subject line
    html: "<html>"+req.body.user.question+" ?"+"<br> A: "+req.body.user.one+ "<br> B: "+req.body.user.two+"<br> C: "+req.body.user.three+"<br> D: "+req.body.user.four+"<br><br> <body> </body></html>"
//    attachments: [{
  //<meta http-equiv='refresh' content='5;url=http://www.sitepoint.com/'>
//          filename: 'Select the correct answers that apply',
//          path: 'https://docs.google.com/forms/d/14-n_s8g25d-vxfOP1PbGB3TGVx2SP5BDWJ7O5p_Yp8o/viewform?embedded=true/'
//        filename: 'Conference Form - Google Forms',
 //       path: 'http://goo.gl/forms/zt2isOKw4i',
//        cid: '12345@abcd.ee' //same cid value as in the html img src
 //   }]
  };

// send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + req.body.user.one + info.response);
  });

}); */




http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
