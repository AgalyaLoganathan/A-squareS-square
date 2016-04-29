use quiz_of_the_day_test

db.User.drop()

// Create User Collection
db.createCollection("User",{
  userName: { type: String },
  emailId: { type: String },
  role : { type: String },
  password : { type: String }
})

// Populate User Collection
db.User.insert( {userName:"S1",emailId:"S1@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S2",emailId:"S2@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S3",emailId:"S3@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S4",emailId:"S4@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S5",emailId:"S5@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S6",emailId:"S6@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S7",emailId:"S7@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S8",emailId:"S8@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S9",emailId:"S9@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S10",emailId:"S10@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S11",emailId:"S11@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S12",emailId:"S12@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S13",emailId:"S13@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S14",emailId:"S14@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S15",emailId:"S15@asu.edu",role:"Student",password:"123"} )

db.User.insert( {userName:"I1",emailId:"I1@asu.edu",role:"Instructor",password:"123"} )

db.Course.drop()

// Create Course Collection
db.createCollection("Course",{
  courseCode: { type: String },
  instructorName: { type: String }
})

// Populate Course Collection
db.Course.insert( {courseCode:"CSE 280 - Intro to JAVA Programming",instructorName:"I1"})

db.StudentCourse.drop()

// Create StudentCourse Collection
db.createCollection("StudentCourse",{
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String }
})

// Populate StudentCourse Collection
db.StudentCourse.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})
db.StudentCourse.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming"})


db.Topics.drop()
db.createCollection("Topics",{
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

db.Topics.insert({WeekId:1,topic:"Introduction to programming and Expressions",subTopics:[{subTopic1:"Java Platform",subTopic2:"OOPs   Concepts",subTopic3:"Expressions",subTopic4:"Literals",subTopic5:"Variables"}]})

db.Topics.insert({WeekId:2,topic:"Classes,Objects and Designs",subTopics:[{subTopic1:"Objects",subTopic2:"Classes",subTopic3:"Comparing Objects",subTopic4:"Methods",subTopic5:"Constructors"}]})

db.Topics.insert({WeekId:3,topic:"Conditional Statements",subTopics:[{subTopic1:"if block",subTopic2:"Branching statements",subTopic3:"while loops",subTopic4:"Switch statements",subTopic5:"for loops"}]})



db.Questions.drop()
//Create QuizQuestions Collections
db.createCollection("Questions",{
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

 

// Populate Questions Table

// Week 1
db.Questions.insert({questionId:1,questionsText:"________ are not machine instructions and therefore, Java interpreter generates machine code that can be directly executed by the machine that is running the Java program.",options:["Compiled Instructions","Compiled code","byte code","Java mid code"],correctAnswer:3,points: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"Java Platform",InstructorUrl:"",weekId:1})

db.Questions.insert({questionId:2,questionsText:"The term __________ means the ability to take many forms.",options:  ["Inheritance","Polymorphism","Member function","Encapsulation"],correctAnswer:2,points: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",InstructorUrl:"",weekId:1})

db.Questions.insert({questionId:3,questionsText:"The order of precedence from highest to lowest is :",options:  ["&&, /, |,{}","%, <=, &&, =","<, !, ==, ++","+, -, [], !="],correctAnswer:2,points: 2,difficultylevel:"hard",topic:"Introduction to programming and Expressions",subTopic:"Expressions",InstructorUrl:"",weekId:1})

db.Questions.insert({questionId:4,questionsText:"Which type of literal is written in pair of single quote ?",options:  ["Boolean","Double","Integer","Character"],correctAnswer:4,points: 2,difficultylevel:"hard",topic:"Introduction to programming and Expressions",subTopic:"Literals",InstructorUrl:"",weekId:1})

db.Questions.insert({questionId:5,questionsText:"When a data type must contain decimal numbers, assign the type",options:  ["Integer","Character","Double","Boolean"],correctAnswer:3,points: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"Variables",InstructorUrl:"",weekId:1})


// Week 2 

db.Questions.insert({questionId:6,questionsText:"Which of these class relies upon its subclasses for complete implementation of its methods?",options:  ["Object Class","abstract class","Arraylist Class","None of the above"],correctAnswer:2,points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Objects",InstructorUrl:"",weekId:2})

db.Questions.insert({questionId:7,questionsText:"Which of the following is a valid declaration of an object of class Box?",options:  ["Box obj = new Box();","Box obj = new Box;","obj = new Box();","new Box obj;"],correctAnswer:1,points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Classes",InstructorUrl:"",weekId:2})

db.Questions.insert({questionId:8,questionsText:"Which of these method of class String is used to compare two String objects for their equality?",options:  ["equals()","Equals()","isequal()","Isequal()"],correctAnswer:1,points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Comparing Objects",InstructorUrl:"",weekId:2})

db.Questions.insert({questionId:9,questionsText:"What will be the return type of a method that not returns any value?",options:  ["void","int","double","none of these"],correctAnswer:1,points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Methods",InstructorUrl:"",weekId:2})

db.Questions.insert({questionId:10,questionsText:"What is the return type of Constructors?",options:  ["int","float","void","None of the mentioned"],correctAnswer:4,points: 2,difficultylevel:"hard",topic:"Classes,Objects and Design",subTopic:"Constructors",InstructorUrl:"",weekId:2})

//Week 3

db.Questions.insert({questionId:11,questionsText:"The control expression in an if statement must be:",options:  [" an expression with type integer","an expression with either the type boolean or integer ","an expression with either the type boolean or integer with value 0 or 1 "," an expression with type boolean"],correctAnswer:4,points: 2,difficultylevel:"hard",topic:"Conditional Statements",subTopic:"if block",InstructorUrl:"",weekId:3})

db.Questions.insert({questionId:12,questionsText:"Which branching statement will cause a program to immediately exit a loop?",options:  ["break","continue","return","All of the above"],correctAnswer:1,points: 2,difficultylevel:"hard",topic:"Conditional Statements",subTopic:"Branching statements",InstructorUrl:"",weekId:3})

db.Questions.insert({questionId:13,questionsText:"A do-while loop is useful when we want the statement within the loop to be executed",options:  ["only once","at least once","more than once","none of the above"],correctAnswer:2,points: 2,difficultylevel:"hard",topic:"Conditional Statements",subTopic:"while loops",InstructorUrl:"",weekId:3})

db.Questions.insert({questionId:14,questionsText:"Switch case checks for",options:  ["equality","greather than","less than","none of the above"],correctAnswer:1,points: 1,difficultylevel:"easy",topic:"Conditional Statements",subTopic:"Switch Statements",InstructorUrl:"",weekId:3})

db.Questions.insert({questionId:15,questionsText:"Each pass through a loop is called a/an",options:  ["enumeration","iteration","culmination","pass through"],correctAnswer:2,points: 1,difficultylevel:"easy",topic:"Conditional Statements",subTopic:"For loops",InstructorUrl:"",weekId:3})


db.StudentPerformance.drop()
db.createCollection("StudentPerformance",{
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String },
  studentScore: Number,
  strengthCategory: { type: String },
  questionId: Number,
  submittedAnswer: Number,
  isCorrect: Boolean,
  weekId: Number
})


// Question 1 data

db.StudentPerformance.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Strong",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,submittedAnswer:2,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,submittedAnswer:2,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,submittedAnswer:4,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,submittedAnswer:2,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:1,submittedAnswer:1,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:1,submittedAnswer:3,isCorrect:true,weekId:1})

// Question 2 data 

db.StudentPerformance.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Strong",questionId:2,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:2,submittedAnswer:3,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:2,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:2,submittedAnswer:3,isCorrect:false,weekId:1})

// Question 3 data

db.StudentPerformance.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Strong",questionId:3,submittedAnswer:1,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:4,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:3,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:4,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:1,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:4,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

// Question 4 data

db.StudentPerformance.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Strong",questionId:3,submittedAnswer:1,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:4,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:3,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:4,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:1,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:3,submittedAnswer:4,isCorrect:false,weekId:1})

db.StudentPerformance.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

db.StudentPerformance.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:3,submittedAnswer:2,isCorrect:true,weekId:1})

// Question 5 data
