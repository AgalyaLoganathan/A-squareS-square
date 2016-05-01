use quiz_of_the_day1

db.users.drop()

// Create user Collection
db.createCollection("users",{
  userName: { type: String },
  emailId: { type: String },
  role : { type: String },
  password : { type: String }
})

// Populate user Collection
db.users.insert( {userName:"S1",emailId:"S1@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S2",emailId:"S2@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S3",emailId:"S3@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S4",emailId:"S4@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S5",emailId:"S5@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S6",emailId:"S6@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S7",emailId:"S7@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S8",emailId:"S8@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S9",emailId:"S9@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S10",emailId:"S10@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S11",emailId:"S11@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S12",emailId:"S12@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S13",emailId:"S13@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S14",emailId:"S14@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"S15",emailId:"S15@asu.edu",role:"Student",password:"123"} )
db.users.insert( {userName:"I1",emailId:"I1@asu.edu",role:"Instructor",password:"123"} )

db.calendars.drop()
db.createCollection("calendars",{
  weekId: Number,
  startDate : { type: Date},
  endDate : { type: Date }
})

db.calendars.insert({weekId:1,startDate: new Date('04-18-2016'),endDate: new Date('04-24-2016')})
db.calendars.insert({weekId:2,startDate: new Date('04-25-2016'),endDate: new Date('05-01-2016')})
db.calendars.insert({weekId:3,startDate: new Date('05-02-2016'),endDate: new Date('05-08-2016')})


db.questionrecommendations.drop()
db.createCollection("questionrecommendations",{
  weekId: Number,
  topic: { type: String },
  subTopic: { type: String },
  reco: { type : Array}
})

db.questionrecommendations.insert({weekId:1,topic:"Polymorphism",subTopic:"Constructors",reco:[{recotext:"reco1",is_useful:1}, {recotext:"reco2",is_useful:1} ]})


db.studentinitialstrengthquizzes.drop()
db.createCollections("studentinitialstrengthquizzes",{
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String },
  isExpert: Boolean
})

db.studentinitialstrengthquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:true})
db.studentinitialstrengthquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})
db.studentinitialstrengthquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpect:false})

db.courses.drop()

// Create course Collection
db.createCollection("courses",{
  courseCode: { type: String },
  instructorName: { type: String }
})

// Populate course Collection
db.courses.insert( {courseCode:"CSE 280 - Intro to JAVA Programming",instructorName:"I1"})

db.studentcourses.drop()

// Create Studentcourse Collection
db.createCollection("studentcourses",{
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String }
})

// Populate studentcourse Collection
db.studentcourses.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.studentcourses.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})


db.topics.drop()
db.createCollection("topics",{
  weekId: Number,
  topic: {type: String},
  subTopics: [{
            subTopic1: { type: String },
            subTopic2: { type: String },
            subTopic3: { type: String },
            subTopic4: { type: String },
	    subTopic5: { type: String }
        }],
})

db.topics.insert({WeekId:1,topic:"Introduction to programming and Expressions",subTopics:[{subTopic1:"Java Platform",subTopic2:"OOPs   Concepts",subTopic3:"Expressions",subTopic4:"Literals",subTopic5:"Variables"}]})

db.topics.insert({WeekId:2,topic:"Classes,Objects and Designs",subTopics:[{subTopic1:"Objects",subTopic2:"Classes",subTopic3:"Comparing Objects",subTopic4:"Methods",subTopic5:"Constructors"}]})

db.topics.insert({WeekId:3,topic:"Conditional Statements",subTopics:[{subTopic1:"if block",subTopic2:"Branching statements",subTopic3:"while loops",subTopic4:"Switch statements",subTopic5:"for loops"}]})

db.topics.insert({WeekId:4,topic:"Inheritance",subTopics:[{subTopic1:"Inheritance",subTopic2:"Interfaces",subTopic3:"Overloading",subTopic4:"Scope",subTopic5:"Object life Cycle"}]})

db.topics.insert({WeekId:5,topic:"Collections",subTopics:[{subTopic1:"Set",subTopic2:"List",subTopic3:"ArrayList",subTopic4:"Map",subTopic5:"HashMap"}]})

db.topics.insert({WeekId:6,topic:"Exceptions",subTopics:[{subTopic1:"Throwing and catching exceptions",subTopic2:"Checked exceptions",subTopic3:"Unchecked exceptions",subTopic4:"Finally",subTopic5:"Nesting exceptions"}]})

db.topics.insert({WeekId:7,topic:"Concurrent Programming",subTopics:[{subTopic1:"Threads and Runnables",subTopic2:"Basic Synchronization",subTopic3:"Client Server Programming",subTopic4:"Remote Method Invocation (RMI)",subTopic5:"Enterprise JavaBean Programming (EJB)"}]})

db.relatedtopics.drop()
db.createCollection("relatedtopics",{
  topic: { type: String },
  relatedtopics: {type : Array}
})

db.relatedtopics.insert({topic:"Introduction to programming and Expressions",relatedtopics:["Collections","Classes,Objects and Designs"]})

db.relatedtopics.insert({topic:"Classes,Objects and Designs",relatedtopics:["Inheritance","Introduction to programming and Expressions"]})

db.relatedtopics.insert({topic:"Inheritance",relatedtopics:["Classes,Objects and Designs"]})

db.relatedtopics.insert({topic:"Collections",relatedtopics:["Introduction to programming and Expressions"]})


db.quizquestions.drop()
//Create Quizquestions Collections
db.createCollection("quizquestions",{
  questionId: Number,
  questionText: {type: String},
  options: { type : Array},
  correctAnswer: Number,
  points: Number,
  difficultylevel: { type: String },
  topic: { type: String },
  subTopic: { type: String },
  InstructorUrl : {type:String },
  weekId: Number
})

 

// Populate questions Table

// Week 1
db.quizquestions.insert({questionId:1,questionsText:"________ are not machine instructions and therefore, Java interpreter generates machine code that can be directly executed by the machine that is running the Java program.",options:["Compiled Instructions","Compiled code","byte code","Java mid code"],correctAnswer:3,points: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"Java Platform",InstructorUrl:"",weekId:1})

db.quizquestions.insert({questionId:2,questionsText:"The term __________ means the ability to take many forms.",options:  ["Inheritance","Polymorphism","Member function","Encapsulation"],correctAnswer:2,points: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",InstructorUrl:"",weekId:1})

db.quizquestions.insert({questionId:3,questionsText:"The order of precedence from highest to lowest is :",options:  ["&&, /, |,{}","%, <=, &&, =","<, !, ==, ++","+, -, [], !="],correctAnswer:2,points: 2,difficultylevel:"hard",topic:"Introduction to programming and Expressions",subTopic:"Expressions",InstructorUrl:"",weekId:1})

db.quizquestions.insert({questionId:4,questionsText:"Which type of literal is written in pair of single quote ?",options:  ["Boolean","Double","Integer","Character"],correctAnswer:4,points: 2,difficultylevel:"hard",topic:"Introduction to programming and Expressions",subTopic:"Literals",InstructorUrl:"",weekId:1})

db.quizquestions.insert({questionId:5,questionsText:"When a data type must contain decimal numbers, assign the type",options:  ["Integer","Character","Double","Boolean"],correctAnswer:3,points: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"Variables",InstructorUrl:"",weekId:1})


// Week 2 

db.quizquestions.insert({questionId:6,questionsText:"Which of these class relies upon its subclasses for complete implementation of its methods?",options:  ["Object Class","abstract class","Arraylist Class","None of the above"],correctAnswer:2,points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Objects",InstructorUrl:"",weekId:2})

db.quizquestions.insert({questionId:7,questionsText:"Which of the following is a valid declaration of an object of class Box?",options:  ["Box obj = new Box();","Box obj = new Box;","obj = new Box();","new Box obj;"],correctAnswer:1,points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Classes",InstructorUrl:"",weekId:2})

db.quizquestions.insert({questionId:8,questionsText:"Which of these method of class String is used to compare two String objects for their equality?",options:  ["equals()","Equals()","isequal()","Isequal()"],correctAnswer:1,points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Comparing Objects",InstructorUrl:"",weekId:2})

db.quizquestions.insert({questionId:9,questionsText:"What will be the return type of a method that not returns any value?",options:  ["void","int","double","none of these"],correctAnswer:1,points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Methods",InstructorUrl:"",weekId:2})

db.quizquestions.insert({questionId:10,questionsText:"What is the return type of Constructors?",options:  ["int","float","void","None of the mentioned"],correctAnswer:4,points: 2,difficultylevel:"hard",topic:"Classes,Objects and Design",subTopic:"Constructors",InstructorUrl:"",weekId:2})

//Week 3

db.quizquestions.insert({questionId:11,questionsText:"The control expression in an if statement must be:",options:  [" an expression with type integer","an expression with either the type boolean or integer ","an expression with either the type boolean or integer with value 0 or 1 "," an expression with type boolean"],correctAnswer:4,points: 2,difficultylevel:"hard",topic:"Conditional Statements",subTopic:"if block",InstructorUrl:"",weekId:3})

db.quizquestions.insert({questionId:12,questionsText:"Which branching statement will cause a program to immediately exit a loop?",options:  ["break","continue","return","All of the above"],correctAnswer:1,points: 2,difficultylevel:"hard",topic:"Conditional Statements",subTopic:"Branching statements",InstructorUrl:"",weekId:3})

db.quizquestions.insert({questionId:13,questionsText:"A do-while loop is useful when we want the statement within the loop to be executed",options:  ["only once","at least once","more than once","none of the above"],correctAnswer:2,points: 2,difficultylevel:"hard",topic:"Conditional Statements",subTopic:"while loops",InstructorUrl:"",weekId:3})

db.quizquestions.insert({questionId:14,questionsText:"Switch case checks for",options:  ["equality","greather than","less than","none of the above"],correctAnswer:1,points: 1,difficultylevel:"easy",topic:"Conditional Statements",subTopic:"Switch Statements",InstructorUrl:"",weekId:3})

db.quizquestions.insert({questionId:15,questionsText:"Each pass through a loop is called a/an",options:  ["enumeration","iteration","culmination","pass through"],correctAnswer:2,points: 1,difficultylevel:"easy",topic:"Conditional Statements",subTopic:"For loops",InstructorUrl:"",weekId:3})


db.studentperformances.drop()
db.createCollection("studentperformances",{
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String },
  studentScore: Number,
  strengthCategory: { type: String },
  questionId: Number,
  topic: { type: String },
  subTopic: { type: String },
  submittedAnswer: Number,
  isCorrect: Boolean,
  weekId: Number
})


// Question 1 data

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Strong",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:4,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:1,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",submittedAnswer:3,isCorrect:true,weekId:1})

// Question 2 data 

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Strong",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:3,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",submittedAnswer:3,isCorrect:false,weekId:1})

// Question 3 data

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Strong",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:1,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:4,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:3,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:4,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:1,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:4,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",submittedAnswer:2,isCorrect:true,weekId:1})

// Question 4 data

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Strong",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:1,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:4,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:3,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:4,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:1,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:4,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:2,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",submittedAnswer:2,isCorrect:true,weekId:1})

// Question 5 data

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Strong",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:4,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:2,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:1,isCorrect:false,weekId:1})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:5,topic:"Introduction to programming and Expressions",submittedAnswer:3,isCorrect:true,weekId:1})

// Question 6 data

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Strong",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:2,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:2,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:4,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:1,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:6,topic:"Classes,Objects and Design",subTopic:"Objects",submittedAnswer:3,isCorrect:true,weekId:2})


// Question 7 

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Strong",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:2,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:4,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:1,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:7,topic:"Classes,Objects and Design",subTopic:"Classes",submittedAnswer:3,isCorrect:true,weekId:2})

// Question 8

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Strong",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:4,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:1,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:8,topic:"Classes,Objects and Design",subTopic:"Comparing Objects",submittedAnswer:3,isCorrect:true,weekId:2})

// Question 9 data

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Strong",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:4,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:2,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:1,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:9,topic:"Classes,Objects and Design",subTopic:"Methods",submittedAnswer:3,isCorrect:true,weekId:2})


//Question 10 data

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Strong",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:1,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:4,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:3,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:4,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:1,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:4,isCorrect:false,weekId:2})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:2,isCorrect:true,weekId:2})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:10,topic:"Classes,Objects and Design",subTopic:"Constructors",submittedAnswer:2,isCorrect:true,weekId:2})


// Initial Quiz 


db.studentinitialquizzes.drop()
db.createCollection("studentinitialquizzes",{
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String },
  questionId: Number,
  topic: { type: String },
  subTopic: { type: String },
  isCorrect: Boolean
})

// Data for Student 1
db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:true})

// Data for Student2

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:true})

//Data for student 3

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:false})

//Data for student 4

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:false})


//Data for student 5
db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:false})

//Data for student 6

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:true})

//Data for student 7

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:true})

//Data for student 8

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:true})

//Data for student 9

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:false})

//Data for student 10

db.studentinitialquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:false})

//Data for student 11

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:false})

//Data for student 12

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:false})

// Data for student 13

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:true})

// Data for student 14

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:false})


//Data for student 15

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:1,
topic:"Introduction to programming and Expressions",subTopic:"Boolean expressions",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:2,
topic:"Classes,Objects and Design",subTopic:"Defining classes and objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:3,
topic:"Classes,Objects and Design",subTopic:"Comparing Objects",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:4,
topic:"Conditional Loops",subTopic:"Statements",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:5,
topic:"Data Types and Arrays",subTopic:"Variables",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:6,
topic:"Data Types and Arrays",subTopic:"Arrays",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:7,
topic:"Inheritance",subTopic:"interfaces",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:8,
topic:"Exceptions",subTopic:"Checked Exceptions",isCorrect:false})

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:9,
topic:"Exceptions",subTopic:"Throw Catch",isCorrect:true})

db.studentinitialquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",questionId:10,
topic:"Threads",subTopic:"Threads",isCorrect:true})

