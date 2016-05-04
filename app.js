var express = require('express')
    , http = require('http')
    , request = require('request')
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
  password : { type: String },
  courseCode : {type: String}
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
var StudentPerformance = mongoDb.model('studentperformances', studentPerformanceSchema);

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
  questionsText: { type: String },
  options: { type: Array },
  correctAnswer: { type: String },
  points: Number,
  difficultylevel: { type: String },
  topic: { type: String },
  subTopic: { type: String },
  InstructorUrl : { type: String },
  weekId: Number
});

var QuizQuestion = mongoDb.model('QuizQuestion', QuizQuestions);

var QuestionRecommendationSchema = new mongoDb.Schema({
  weekId: Number,
  questionId: Number,
  topic: { type: String },
  subTopic: { type: String },
  reco: { type : Array}
});

var QuestionRecommendation = mongoDb.model('QuestionRecommendation', QuestionRecommendationSchema);

var studentInitialQuizStrengthSchema = new mongoDb.Schema({
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String },
  isExpert: Boolean
});
var StudentInitialStrengthQuiz = mongoDb.model('StudentInitialStrengthQuiz', studentInitialQuizStrengthSchema);

var CalendarsSchema = new mongoDb.Schema({
  weekId: Number,
  startDate : { type: Date},
  endDate : { type: Date }
});
var Calendar = mongoDb.model('Calendar', CalendarsSchema);

app.post('/updateUsefulReco',  function(req, res){
    var input = req.body;
    console.log("hello");
    console.log(input);
    QuestionRecommendation.update(
        {'reco.recotext' : input.recotext,
              'questionId': input.question_id },
            { $set:
              {
                'reco.is_useful': true
               }
        }
  );
  var currentWeekId ;
  var questionId;
  var userDetails = currentUser;
  var recommendations;
  var today = new Date();
  Calendar.findOne({
    'startDate' : { $lte : today},
    'endDate': {$gte: today}
  }, function(err, entry){
    var isWeekend = ( today.getDay() == 0 || today.getDay() == 6);
    var timeDiff = Math.abs(today.getTime() - entry['startDate'].getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(isWeekend) {
      diffDays = 5;
    }
    questionId = diffDays + (entry['weekId'] -1) *5;
    currentWeekId = entry['weekId'];
      QuizQuestion.find({
      'weekId' : currentWeekId,
      'questionId': questionId
      }, function(err, result){
        result['reading_materials'] = [];
        QuestionRecommendation.find({
          'questionId' : result['questionId'],
          'weekId': result['weekId']}, function(err, reco){;
              reco = [ { "recotext" : "The if block executes only if the boolean expression associated with it is true. The structure of an if block is as follows:if (boolean expression1) {statement1 statement2...statement}", "is_useful" : true }, { "recotext" : "In Java, boolean logic has a useful property called short circuiting. This means that expressions will only be evaluated as far as necessary. In the expression (a && b), if a is false, then b will not be evaluated because the expression will be false no matter what.", "is_useful" : true }, { "recotext" : "Conditional expressions use the compound ?: operator. Syntax:boolean expression1 ? expression1 : expression2.This evaluates boolean expression1, and if it is true then the conditional expression has the value of expression1; otherwise the conditional expression has the value of expression2.", "is_useful" : true } ];
              recommendations = reco;
              // _.each(reco, function(r){
              //   result['reading_materials'].push(r['recotext']);
              // });
              // result['reading_materials']= reco;
              // console.log("Found Reco " );
              // console.log(result['reading_materials']);
              var finalResult = [];
              finalResult.push(result);
              var results = { 'userDetails': userDetails,
              'input': result, 'reco' : recommendations};
               console.log(results);
               console.log(results.reco.length);
              res.render('student_screens/dashboard.ejs', { results } );
          });
      });
  });

});

app.post('/updateNotUsefulReco',  function(req, res){
    var input = req.body;
    console.log("hello");
    //{ question_id: '9', reco_text: 'url1' }
    console.log(input);
    QuestionRecommendation.update(
        {'reco.recotext' : input.recotext,
          'questionId': input.question_id },
            { $set:
              {
                'reco.is_useful': false
               }
        }
  );
  var currentWeekId ;
  var questionId;
  var userDetails = currentUser;
  var recommendations;
  var today = new Date();
  Calendar.findOne({
    'startDate' : { $lte : today},
    'endDate': {$gte: today}
  }, function(err, entry){
    var timeDiff = Math.abs(today.getTime() - entry['startDate'].getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    questionId = diffDays + (entry['weekId'] -1) *5;
    currentWeekId = entry['weekId'];
      QuizQuestion.find({
      'weekId' : currentWeekId,
      'questionId': questionId
      }, function(err, result){
        result['reading_materials'] = [];
        QuestionRecommendation.find({
          'questionId' : result['questionId'],
          'weekId': result['weekId']}, function(err, reco){;
               reco = [ { "recotext" : "The if block executes only if the boolean expression associated with it is true. The structure of an if block is as follows:if (boolean expression1) {statement1 statement2...statement}", "is_useful" : true }, { "recotext" : "In Java, boolean logic has a useful property called short circuiting. This means that expressions will only be evaluated as far as necessary. In the expression (a && b), if a is false, then b will not be evaluated because the expression will be false no matter what.", "is_useful" : true }, { "recotext" : "Conditional expressions use the compound ?: operator. Syntax:boolean expression1 ? expression1 : expression2.This evaluates boolean expression1, and if it is true then the conditional expression has the value of expression1; otherwise the conditional expression has the value of expression2.", "is_useful" : true } ];
              recommendations = reco;
              // _.each(reco, function(r){
              //   result['reading_materials'].push(r['recotext']);
              // });
              // result['reading_materials']= reco;
              // console.log("Found Reco " );
              // console.log(result['reading_materials']);
              var finalResult = [];
              finalResult.push(result);
              var results = { 'userDetails': userDetails,
              'input': result, 'reco' : recommendations};
               console.log(results);
               console.log(results.reco.length);
              res.render('student_screens/dashboard.ejs', { results } );
          });
      });
  });

});

var courseCode = "CSE 280 - Intro to JAVA Programming";
var currentWeekId = 5;

// current user
// var currentUser = {
//   'userName': 's1',
//   'emailId': 's1@asu.edu',
//   'courseCode' : "CSE 280 - Intro to JAVA Programming"
// }
app.get('/', function(req, res){
    res.render('login.ejs');
});

app.post("/login", function(req, res){
    //console.log(req.body);
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
        if(user['role'] == 'Student') {

          var results  = {
            'userDetails': currentUser,
            'input': []
          }
    var currentWeekId = 2;
    var questionId = 8;
    var userDetails = currentUser;
    var recommendations;
    var today = new Date();
    Calendar.findOne({
      'startDate' : { $lte : today},
      'endDate': {$gte: today}
    }, function(err, entry){
      var timeDiff = Math.abs(today.getTime() - entry['startDate'].getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      questionId = diffDays + (entry['weekId'] -1) *5;
      currentWeekId = entry['weekId'];
      console.log("today is:");
      console.log(today);
      console.log("QUestion and week ID ares");
      console.log(questionId);
      console.log(currentWeekId);
        QuizQuestion.find({
        'weekId' : currentWeekId,
        'questionId': questionId
        }, function(err, result){
          //console.log("CHecking results");
          //console.log(result);
          //console.log("--CHecking results");
          result['reading_materials'] = [];
          QuestionRecommendation.find({
            'questionId' : result['questionId'],

            'weekId': result['weekId']}, function(err, reco){;
                reco = [ { "recotext" : "The if block executes only if the boolean expression associated with it is true. The structure of an if block is as follows:if (boolean expression1) {statement1 statement2...statement}", "is_useful" : true }, { "recotext" : "In Java, boolean logic has a useful property called short circuiting. This means that expressions will only be evaluated as far as necessary. In the expression (a && b), if a is false, then b will not be evaluated because the expression will be false no matter what.", "is_useful" : true }, { "recotext" : "Conditional expressions use the compound ?: operator. Syntax:boolean expression1 ? expression1 : expression2.This evaluates boolean expression1, and if it is true then the conditional expression has the value of expression1; otherwise the conditional expression has the value of expression2.", "is_useful" : true } ];
                recommendations = reco;
                // _.each(reco, function(r){
                //   result['reading_materials'].push(r['recotext']);
                // });
                // result['reading_materials']= reco;
                // console.log("Found Reco " );
                // console.log(result['reading_materials']);
                var finalResult = [];
                finalResult.push(result);
                var results = { 'userDetails': userDetails,
                'input': result, 'reco' : recommendations};
                 console.log(results);
                 console.log(results.reco.length);
                res.render('student_screens/dashboard.ejs', { results } );
            });
        });
    });
    } else{
          res.render('instructor_screens/add-quiz.ejs', {'results' : userDetails});
          //res.render('instructor-home.ejs');
        }
    }
    else {
    res.render('login.ejs', {message:'Incorrect user name or password.'});
    }
  });
});

app.get("/questions", function(req,res){
    res.render("student_screens/display_questions.ejs");
});

app.get("/getQuestions", function(req, res){
 var today = new Date();
  Calendar.findOne({
    'startDate' : { $lte : today},
    'endDate': {$gte: today}
  }, function(err, entry){
    var isWeekend = ( today.getDay() == 0 || today.getDay() == 6);
    var timeDiff = Math.abs(today.getTime() - entry['startDate'].getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(isWeekend) {
      diffDays = 5;
    }
    currentWeekId = entry['weekId'];
      QuizQuestion.find({
      'weekId' : { $lte : currentWeekId }
      }, function(err, result){
        var response = _.groupBy(result, 'weekId');
        console.log(response);
        res.json(response);
      });
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
          res.render('instructor_screens/add-quiz.ejs');
        }
      }
      });
    }
});

app.get('/dashboard1', function(req, res){
  res.render('instructor_screens/add-quiz.ejs');
});

app.get('/add-quiz', function(req, res){
  res.render('instructor_screens/add-quiz.ejs');
});

app.get('/initial_quiz', function(req, res){
  res.render('initial_quiz.ejs');
});


app.get('/instructor-performance', function(req, res){
    res.render('instructor-performance.ejs');
});

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
        new StudentInitialStrengthQuiz({
            studentName: currentUser['userName'],
            studentEmail: currentUser['emailId'],
            courseCode: courseCode,
            isExpert: true
        }).save();
      }
      else{
        new StudentInitialStrengthQuiz({
            studentName: currentUser['userName'],
            studentEmail: currentUser['emailId'],
            courseCode: courseCode,
            isExpert: false
        }).save();
      }
      console.log("Came here");
      res.redirect(200, '/dashboard.ejs');
    }
});
}); });

/* student screen */

app.get('/student_course', function(req, res){
    res.render('student_screens/student_course.ejs');
});

app.get('/student_performance', function(req, res){
    res.render('student_screens/student_performance_landing_page.ejs');
});

app.get('/typography.ejs', function(req,res){
    res.render('student_screens/typography.ejs');
});

app.get('/typography1.ejs', function(req,res){
    res.render('instructor_screens/typography1.ejs');
});

// app.get('/table', function(req,res){
//     res.render('student_screens/table.ejs');
// });

app.get('/profile', function(req,res){
    console.log(currentUser);
    res.render('student_screens/user.ejs', currentUser);
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
    var currentWeekId ;
    var questionId;
    var userDetails = currentUser;
    var today = new Date();
    Calendar.findOne({
      'startDate' : { $lte : today},
      'endDate': {$gte: today}
    }, function(err, entry){
      var timeDiff = Math.abs(today.getTime() - entry['startDate'].getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      questionId = diffDays + (entry['weekId'] -1) *5;
      currentWeekId = entry['weekId'];
        QuizQuestion.find({
        'weekId' : currentWeekId,
        'questionId': questionId
        }, function(err, result){
          result['reading_materials'] = [];
          QuestionRecommendation.find({
            'questionId' : result['questionId'],
            'weekId': result['weekId']}, function(err, reco){
                // console.log("Recommendation is ");
                // console.log(reco);
                // result['reading_materials'] = reco['recotext'];
                // var finalResult = [];
                // finalResult.push(result);
                // var results = { 'userDetails': userDetails,
                // 'input': result}
                // // console.log(results);
                // res.render('student_screens/dashboard.ejs', { results } );
                reco = [ { "recotext" : "The constructor is a special method called automatically when an object is created with the new keyword. Constructor does not have a return value and its name is the same as the class name. Each class must have a constructor. If we do not define one, the compiler will create a default so called empty constructor automatically.", "is_useful" : true }, { "recotext" : "Automatically created constructor. 1 public class MyClass {2   /**3   * MyClass Empty Constructor4   */5   public MyClass() {6   }}", "is_useful" : true }, { "recotext" : "The following constructor builds an array list that has the specified initial capacity. The capacity is the size of the underlying array that is used to store the elements.", "is_useful" : true } ];
                recommendations = reco;
                // _.each(reco, function(r){
                //   result['reading_materials'].push(r['recotext']);
                // });
                // result['reading_materials']= reco;
                // console.log("Found Reco " );
                // console.log(result['reading_materials']);
                var finalResult = [];
                finalResult.push(result);
                var results = { 'userDetails': userDetails,
                'input': result, 'reco' : recommendations};
                 console.log(results);
                 console.log(results.reco.length);
                res.render('student_screens/dashboard.ejs', { results } );
            });
        });
    });
});

app.post('/update_student_performance', function(req, res){
  console.log("Entered");
  var question = req.body;
  var isCorrect = false;
  var studentScore = 0;
  var strengthCategory = "Weak";
  console.log(question);
  QuizQuestion.findOne({
    'questionsText': req.body.question_text
  }, function(err, question){
    if(question['correctAnswer'] == req.body.options) {
        isCorrect = true;
        studentScore = question['points'];
        strengthCategory = "Strong";
    }
    new StudentPerformance({
      studentName: currentUser['userName'],
      studentEmail: currentUser['emailId'],
      courseCode: courseCode,
      studentScore: studentScore,
      strengthCategory: strengthCategory,
      questionId: question['questionId'],
      submittedAnswer: req.body.options,
      topic: question['topic'],
      subTopic: question['subTopic'],
      isCorrect: isCorrect,
      weekId: currentWeekId
    }).save(function(err, results){
      console.log("saved");
      var results  = {
            'userDetails': currentUser,
            'input': [],
            'reco': []
      }
      res.render('student_screens/dashboard.ejs', {'results' : results});
    });
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

app.get('/table', function(req, res){
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
    });
});

app.get('/tableJSON', function(req, res){
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
        res.json(results);
    });
});


app.get('/study_groups_test', function(req, res){
var currentWeekId = 2;
var countOfCorrectAnswers = 0;
var totalQuestions = 0;
// currentUser['userName']
StudentPerformance.find({
    'studentName': currentUser['userName'],
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
          var tutors = [];
          var results= [];
          var topic = performances[0]['topic'];
          var relatedTopics = [topic];
          console.log("Related topics " + relatedTopics);
          StudentPerformance.find({
          'strengthCategory': 'Strong',
          'topic': {$all: relatedTopics}
          }, function(err, sperformances){
              console.log(sperformances);
          _.each(sperformances, function(sperformance){
            if(sperformance['studentName'] == currentUser['userName']) {
            tutors.push(sperformance['studentName']);
            var relatedTopicScores = [];
            _.each(relatedTopics, function(rTopic){
              relatedTopicScores.push(Math.floor((Math.random() * 100) + 1));
            });
            picPath = "img/faces/face-" + ((countOfCorrectAnswers/2)%7) + ".jpg";
            var temp = {
              'name': sperformance['studentName'],
              'nickName': sperformance['studentEmail'],
              "picPath" : picPath,
              "BGpicPath" : "img/sidebar-3.jpg",
              "topicList": relatedTopics,
              "topicProficiency" : relatedTopicScores
            };
            results.push(temp);
            }
          });
            var response = [];
            tutors =  _.unique(tutors);

            _.each(tutors, function(t){
                var found = _.find(results, function(r){
                  return r['name'] == t;
                });
                if(found != undefined) {
                    response.push(found);
                }
            });
            console.log(response);
            // res.render("student_screens/study_group.ejs", response);
            res.json(response);
          });
      }
});
});


/* end of student screen */

//Loading Question Data
//Loading Question Data
app.get('/loading', function(req, res){
  var url="https://docs.google.com/spreadsheets/d/1c1Mqds569xJsn9JVNOqexTtrKXm_4PRCmk2ibqJ-lz0/export?format=csv";
  var outputData=" ";
  var question="";

  request(url, function(error, response, body) {
    var allTextLines = "";
    var outputData = "";
    var questionName = "";
    var qId="";
    var correctAnswer="";
    var wId=0;
    var difficulty="";
    var flag=0;
    var topic = "";
    var subTopic = "";
    var allTextLines = body.split(/\r\n|\n/);
    for(var j=0;j<allTextLines.length;j++){
      outputData = allTextLines[j].split(",");
      for(var i=0;i<outputData.length;i++){
        if(outputData[i] == "*"){
          questionName = outputData[i+1];
          flag=1;
        }
        questionName.trim();
        console.log("Question asked is: --" + questionName + "--");

        QuizQuestion.findOne({'questionsText': questionName}, function(err, questionInfo){
          qId = questionInfo['questionId'];
          correctAnswer = questionInfo['correctAnswer'];
          wId = questionInfo['weekId'];
          difficulty = questionInfo['difficultylevel'];
          topic = questionInfo['topic'];
          subTopic = questionInfo['subTopic'];
          console.log("QUesion Infor is:"+questionInfo);
        });
        if(flag == 1){
          flag = 0;
          break;
        }
        var studAnswer = parseInt(outputData[0]);
        console.log(studAnswer + "--");
        var studEmail = outputData[1].trim();
        console.log("Student Email is--"+studEmail + "--");
        var result = false;
        var score = 0;
        User.findOne({'emailId': studEmail}, function(err, userInfo){
            console.log("The user info is:" + userInfo);
            if(studAnswer == parseInt(correctAnswer)){
              result = true;
              score=1;
            }
            var performance = new StudentPerformance({
            studentName: userInfo['userName'],
            studentEmail: userInfo['emailId'],
            courseCode: "CSE 280 - Intro to JAVA Programming",
            totalScore: 25,
            studentScore: score,
            topic: topic,
            subTopic: subTopic,
            strengthCategory: difficulty,
            questionId: qId,
            submittedAnswer: studAnswer,
            isCorrect: result,
            weekId: 9
            });
            performance.save(function(err){
              if(err){
                console.log("Error in saving quiz");

              } else {
                console.log("Data has been saved");
              }
            });
        });

        break;

     }//End of FOR reading within one line
    }//End of FOR reading outputData
  });

});



app.post('/instructor-home', function(req, res){
    res.render('instructor-home.ejs');
});

app.get('/instructor-home', function(req, res){
    res.render('instructor-home.ejs');
});

// test e-mail
app.post('/testing', function(req, res){
  //var question = req.body;
  console.log('Entered email function');
  console.log(req.body.user.instLink);
  console.log(req.body.user.Topic);
  console.log(req.body.user.subTopic);
  console.log(req.body.user.Weightage);
  console.log(req.body.user.solution);
  var a = "";
  a= req.body.user.solution;;
  var weightage = parseInt(req.body.user.Weightage);

  //Insert
  var quesOptions = [];
  quesOptions.push(req.body.user.one);
  quesOptions.push(req.body.user.two);
  quesOptions.push(req.body.user.three);
  quesOptions.push(req.body.user.four);
  var results = QuizQuestion.aggregate([    
       { $group: { 
          _id : {  },
          maxQID: { $max: "$questionId" }
          }
        }
    ]).exec(function ( e, d ) {
            var newQID = 0;
            var flag = 0;            
            _.each(d, function(entry){
                newQID = parseInt(entry['maxQID']) + 1;
                if(flag!=1){
                  QuizQuestion({
                    questionId: newQID,
                    questionsText: req.body.user.question,
                    options: quesOptions,
                    correctAnswer: a,
                    points: req.body.user.Weightage,
                    difficultylevel: "Weak",
                    topic: req.body.user.Topic,
                    subTopic: req.body.user.subTopic,
                    InstructorUrl: req.body.user.instLink,
                    weekId: 4
                  }).save();
                  
                  var transporter = nodemailer.createTransport('smtps://javatutorial.learner%40gmail.com:1a3c2b4d@smtp.gmail.com');  
                  var mailOptions = {
                    from: 'javatutorial.learner@gmail.com', // sender address
                    to: 'chronicnexus11@gmail.com,javatutorial.student2@gmail.com,javatutorial.student@gmail.com', // list of receivers
                    subject: 'CSE 591 : Quiz of the day', // Subject line    
                    html: "<body> <B> TODAY QUESTION OF THE DAY IS</B> <br><br>" + req.body.user.question+" ?"+"<br> 1: "+req.body.user.one+ "<br> 2: "+req.body.user.two+"<br> 3: "+req.body.user.three+"<br> 4: "+req.body.user.four+"<br><br>  <I>please reply with the answer</I></body>"   
                  };

                // send mail with defined transport object
                  transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        console.log(error);
                    }
                    console.log('Message sent: ' + info.response);
                  });

                  flag = 1;
                }
                res.render('instructor_screens/add-quiz.ejs');                 
              });
              
        });

});


/* visualizations endpoint */
app.get('/dataset', function(req, res){
    var results = StudentPerformance.aggregate([
       { $match: {
        'courseCode': courseCode,
        'studentName': currentUser['userName']
       }},
       { $group: { _id : {
                  'subTopic' : '$subTopic',
                  'weekId': '$weekId'
                          },
                  studentTotalScore:
                   { $sum: '$studentScore'}
                }
      }
    ]).exec(function ( e, d ) {
      //{label:"week2", "a":5, "b":30, "c": 50, "d":15},
        var dataset = [];
        var visitedWeekIds = [];
        var subTopicsTotal = [];
        results = d;
        var weekIds = [];
        _.each(results, function(r){
          weekIds.push(r['_id']['weekId']);
        });
        weeIds = _.uniq(weekIds);
        var groupedResult = _.groupBy(results, function(r){
            return r['_id']['weekId'];
        });

        _.each(weekIds, function(weekId){
            // console.log(groupedResult[weekId]);
            // console.log("next");
            //var subTopicsTotal = _.union(subTopicsTotal,groupedResult[weekId]);
            _.each(groupedResult[weekId], function(subTopic){
                // console.log(subTopic['_id']['subTopic']);
                var subTopicToAdd = subTopic['_id']['subTopic'];
                var subTopicsTotalContains = _.contains(subTopicsTotal, subTopicToAdd);
                // console.log(subTopicToAdd);
                //console.log(subTopicsTotalContains);
                if (subTopicsTotalContains == false){
                    subTopicsTotal.push(subTopic['_id']['subTopic']);
                }
            });
        });

        _.each(weekIds, function(weekId){
              var temp = {'label' : "week"+weekId};
              var subTopics = groupedResult[weekId];
              _.each(subTopicsTotal, function(subTopicName){
                  temp[subTopicName] = 0;
              })
              _.each(subTopics, function(s){
                    temp[s['_id']['subTopic']] = s['studentTotalScore'];
                    console.log(s);
          })
          var found = _.contains(visitedWeekIds, weekId);
          if(!found){
              dataset.push(temp);
              visitedWeekIds.push(weekId);
          }
        })

        // res.render('student_screens/table.ejs', {'results': results});
        console.log(dataset);
        res.json(dataset);
    });
});

app.get('/radarTopics', function(req, res){
  StudentPerformance.aggregate([
       { $match: {
        'courseCode': courseCode
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
        results = d;
        var topper = results[0]['_id'];
        var students= [];
        students.push(topper);
        students.push(currentUser['userName']);
        StudentPerformance.aggregate([
        { $match: {
        'courseCode': courseCode,
        'studentName' : { $in: students}
        }},
       { $group: { _id : {
                  'topic' : '$topic',
                  'studentName': '$studentName'
                  },
                  studentTotalScore:
                   { $sum: '$studentScore'}
                }
      },
      {
        $sort: {
         studentTotalScore : -1
        }
      }
    ]).exec(function ( e, result) {
      var radarTopper = [];
      var radarCurrentStudent = [];
      var radarTopics = [];
      //[ { _id: { topic: 'blah', studentName: 's1' },
    // studentTotalScore: 6 } ]
        console.log("Output radar");
        _.each(result, function(r){
          radarTopics.push(r['_id']['topic']);
          if(r['_id']['studentName'] == topper){
              radarTopper.push(r['studentTotalScore']);
          } else {
              radarCurrentStudent.push(r['studentTotalScore']);
          }
        });
        // console.log(radarTopper);
        // console.log(radarCurrentStudent);
        // console.log(radarTopics);
        var response = {
          'radarTopper': radarTopper,
          'radarTopics': _.uniq(radarTopics),
          'radarCurrentStudent': radarCurrentStudent
        }
        res.json(response);
    });
  });
});

app.get('/logout', function(req, res){
  res.render('login.ejs');
});

//Geting Sankey Data
app.get('/sankey', function(req, res){
  StudentPerformance.aggregate([
       { $match: {
        'courseCode': courseCode
       }},
       { $group: { _id : {
              strengthCategory: '$strengthCategory',
              topic: '$subTopic'
            },
            count: { $sum: 1 }
          }
      }
    ]).exec(function ( e, d ) {
        var finalResult = [];
        var studentNames = [];
        var topics = [];
        _.each(d, function(entry){
          var temp=[];
          temp.push(entry['_id']['strengthCategory'],entry['_id']['topic'],entry['count']);
          finalResult.push(temp);
        })
        //console.log(finalResult);
        res.json({
          "sankeyData": finalResult
        })
        //res.render('instructor_screens/typography.ejs', { "heatMapY": finalReingsult, "heatMapX": topics});
    });

});

app.get('/heatmap', function(req, res){
   StudentPerformance.aggregate([
       { $match: {
        'courseCode': courseCode
       }},
       { $group: { _id : {
            studentName: '$studentName',
            topic: '$subTopic'},
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
    //   [ { _id: { studentName: 's1', topic: 'blah' },
    // studentTotalScore: 6 } ]
        var finalResult = [];
        var studentNames = [];
        var topics = [];
        _.each(d, function(entry){
            studentNames.push(entry['_id']['studentName']);
            topics.push(entry['_id']['topic']);
        })
        topics = _.uniq(topics);
        studentNames = _.uniq(studentNames);
        _.each(studentNames, function(s){
          var temp = { "text" : s};
          var scores = [];
          _.each(topics, function(topic){
              var scoreOfStud = _.find(d, function(e) {
                 return e['_id']['studentName'] == s &&
                  e['_id']['topic'] == topic;
              });
              if(scoreOfStud == undefined){
                scores.push(0);
              }else{
                scores.push(scoreOfStud['studentTotalScore']);
              }
          });
          temp["values"] = scores;
          finalResult.push(temp);
        });
        console.log("FINAL RESULTS SENT ARE: ");
        console.log(finalResult);
        //console.log(topics);

        res.json({
          "heatMapY": finalResult,
          "heatMapX": topics
        })
    });
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
