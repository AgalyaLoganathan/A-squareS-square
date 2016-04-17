var express = require('express')
    , http = require('http')
    , path = require('path')
    , fs = require('fs')
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

app.get('/', function(req, res){
    res.render('login.ejs');
});

app.post("/register", function(req, res){
    console.log(req.body);
    var data = req.body;
    if(data.password != data['confirm-password']){
      res.render('login.ejs');
    }else{
      fs.appendFile('user_details.txt', data, function(err){
        console.log("Registration is successful")
        res.render('initial_quiz.ejs');
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

app.post("/login", function(req, res){
    console.log(req.body);
    var data = req.body;
    var contents = fs.readFile('user_details.txt');
    var jsonContent = JSON.parse(contents);
    console.log(jsonContent);
});

app.get('/get_flare', function(req, res){
    var flare =   {"name": "flare",
  "children": [
    {
      "name": "Collections",
      "children": [
        {
          "name": "Linked list",
          "size": 3032
        },
        {
          "name": "Arrays",
          "size": 10342
        },
        {
          "name": "Arraylist (Collections)",
          "size": 47418
        },
        {
          "name": "Other",
          "size": 981
        },
        {
          "name": "Vector",
          "size": 19418
        },
        {
          "name": "Stack",
          "size": 5002
        }
      ]
    },
    {
      "name": "Exceptions",
      "children": [
        {
          "name": "Null Reference",
          "size": 15982
        },
        {
          "name": "Invalid type",
          "size": 3413
        },
        {
          "name": "Stack overflow",
          "size": 884
        },
        {
          "name": "Exception handling",
          "size": 223
        },
        {
          "name": "Index out of bound",
          "size": 45
        },
        {
          "name": "Stack Trace Issues ",
          "size": 699
        },
        {
          "name": "Try-catch Issues",
          "size": 2976
        },
        {
          "name": "Undefined variables",
          "size": 4735
        },
        {
          "name": "Other Errors",
          "size": 187
        }
      ]
    },
    {
      "name": "Class Concepts",
      "children": [
        {
          "name": "Child Class",
          "size": 2302
        },
        {
          "name": "Super Class",
          "size": 8265
        },
        {
          "name": "Object Instantitation",
          "size": 4392
        },
        {
          "name": "Static Class",
          "size": 46
        },
        {
          "name": "Constructor",
          "size": 10242
        },
        {
          "name": "Objects",
          "size": 32625
        },
        {
          "name": "Method Calls",
          "size": 7299
        }
      ]
    },
    {
      "name": "Access Specifiers",
      "children": [
        {
          "name": "public",
          "size": 749
        },
        {
          "name": "protected",
          "size": 1766
        },
        {
          "name": "private",
          "size": 3276
        },
        {
          "name": "Uncategorized",
          "size": 145
        }
      ]
    },
    {
      "name": "OOPS Concepts",
      "children": [
        {
          "name": "Abstract Class",
          "size": 3472
        },
        {
          "name": "Interface",
          "size": 6011
        },
        {
          "name": "Aggregation",
          "size": 16
        },
        {
          "name": "Composition",
          "size": 16
        },
        {
          "name": "Comparator",
          "size": 4003
        },
        {
          "name": "Encapsulation",
          "size": 27
        }
      ]
    },
    {
      "name": "Recursion",
      "children": [
        {
          "name": "Recursive methods",
          "size": 4463
        },
        {
          "name": "Exceptions",
          "size": 42
        },
        {
          "name": "Uncategorised",
          "size": 1766
        },
        {
          "name": "Recursion variables",
          "size": 247
        }
      ]
    },
    {
      "name": "Loop Constructs",
      "children": [
        {
          "name": "Iterators",
          "size": 252
        },
        {
          "name": "Do While",
          "size": 1560
        },
        {
          "name": "While",
          "size": 3959
        },
        {
          "name": "If-else",
          "size": 8989
        },
        {
          "name": "For loop",
          "size": 628
        }
      ]
    },
    {
      "name": "Sorting",
      "children": [
        {
          "name": "Insertion sort",
          "size": 10
        },
        {
          "name": "Selection sort",
          "size": 2181
        },
        {
          "name": "Merge sort",
          "size": 15189
        },
        {
          "name": "Quick sort",
          "size": 1057
        },
        {
          "name": "Other algorithms",
          "size": 14065
        }
      ]
    },
    {
      "name": "Searching",
      "children": [
        {
          "name": "Binary Search",
          "size": 713
        },
        {
          "name": "Partition methods",
          "size": 8817
        },
        {
          "name": "Uncategorized",
          "size": 327
        }
      ]
    },
    {
      "name": "UI Controls",
      "children": [
        {
          "name": "CUI",
          "size": 368
        },
        {
          "name": "Listeners",
          "size": 15301
        },
        {
          "name": "Events",
          "size": 1250
        },
        {
          "name": "Swing",
          "size": 5781
        },
        {
          "name": "Css",
          "size": 710
        },
        {
          "name": "Scroll",
          "size": 32
        },
        {
          "name": "Applet",
          "size": 5132
        },
        {
          "name": "GUI",
          "children": [
            {
              "name": "Text fields",
              "size": 5812
            },
            {
              "name": "Mouse controls",
              "size": 327
            },
            {
              "name": "Buttons",
              "size": 7788
            },
            {
              "name": "Alignment",
              "size": 241
            }
          ]
        }
      ]
    },
    {
      "name": "Numeric Types",
      "children": [
        {
          "name": "Integer",
          "size": 13832
        },
        {
          "name": "Float",
          "size": 12475
        },
        {
          "name": "Boolean",
          "size": 146
        },
        {
          "name": "Other",
          "size": 9983
        }
      ]
    },
    {
      "name": "Expression Trees",
      "children": [
        {
          "name": "Infix",
          "size": 4317
        },
        {
          "name": "Postfix",
          "size": 5452
        },
        {
          "name": "Precedence",
          "size": 1502
        }
      ]
    },
    {
      "name": "Type Casting",
      "size": 420
    },
    {
      "name": "Functions",
      "size": 8832
    },
    {
      "name": "Strings",
      "size": 10988
    },
    {
      "name": "Opeartors",
      "children": [
        {
          "name": "Division",
          "size": 1299
        },
        {
          "name": "Comparisons",
          "size": 3093
        },
        {
          "name": "Precision",
          "size": 955
        }
      ]
    }
  ]
};
    res.send(flare);
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

