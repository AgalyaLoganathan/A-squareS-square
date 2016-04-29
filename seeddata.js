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
db.User.insert( {userName:"S16",emailId:"S16@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S17",emailId:"S17@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S18",emailId:"S18@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S19",emailId:"S19@asu.edu",role:"Student",password:"123"} )
db.User.insert( {userName:"S20",emailId:"S20@asu.edu",role:"Student",password:"123"} )

db.User.insert( {userName:"I1",emailId:"I1@asu.edu",role:"Instructor",password:"123"} )

db.Course.drop()

// Create Course Collection
db.createCollection("Course",{
  courseName: { type: String },
  courseCode: { type: String },
  instructorName: { type: String }
})

// Populate Course Collection
db.Course.insert( {courseName:"Intro to JAVA Programming",courseCode:"CSE280",instructorName:"I1"})

db.StudentCourse.drop()

// Create StudentCourse Collection
db.createCollection("StudentCourse",{
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String }
})

// Populate StudentCourse Collection
db.StudentCourse.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S16",studentEmail:"S16@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S17",studentEmail:"S17@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S18",studentEmail:"S18@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S19",studentEmail:"S19@asu.edu",courseCode:"CSE280"})
db.StudentCourse.insert({studentName:"S20",studentEmail:"S20@asu.edu",courseCode:"CSE280"})


db.QuizQuestions.drop()
//Create QuizQuestions Collections
db.createCollection("QuizQuestions",{
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
  courseCode: { type: String },
  weekId: Number
})

// Populate Questions Table
db.QuizQuestions.insert({questionId:1,questionsText:"If an expression contains double, int, float, long, then whole expression will promoted into which of these data types?",options:  [{option1:"long",option2:"int",option3:"double",option4:"float"}],correctAnswer:"option3",point: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"TypeConversions",courseCode:"CSE280",weekId:1})

db.QuizQuestions.insert({questionId:2,questionsText:"Which is true about an anonymous inner class?",options:  [{option1:"It can extend exactly one class and implement exactly one interface.",option2:"It can extend exactly one class and can implement multiple interfaces.",option3:"It can extend exactly one class or implement exactly one interface.",option4:"It can implement multiple interfaces regardless of whether it also extends a class."}],correctAnswer:"option3",point: 2,difficultylevel:"hard",topic:"Classes and Objects",subTopic:"Nested Classes",courseCode:"CSE280",weekId:2})

db.QuizQuestions.insert({questionId:3,questionsText:"In object oriented programming, composition relates to",options:  [{option1:"The organization of components interacting to achieve a coherent, common behavior",option2:"The use of consistent coding conventions",option3:"The use of data hiding to achieve polymorphic behavior.",option4:"The organization of components interacting not to achieve a coherent common behavior"}],correctAnswer:"option1",point: 1,difficultylevel:"easy",topic:"Class Design",subTopic:"Object Lifecycle",courseCode:"CSE280",weekId:3})

db.QuizQuestions.insert({questionId:4,questionsText:"Which looping process checks the test condition at the end of the loop?",options:  [{option1:"if",option2:"for",option3:"while",option4:"do-while"}],correctAnswer:"option4",point: 1,difficultylevel:"easy",topic:"Conditional Loops",subTopic:"Loop blocks",courseCode:"CSE280",weekId:4})

db.QuizQuestions.insert({questionId:5,questionsText:" Which of these is an incorrect array declaration?",options:  [{option1:"int arr[] = new int[5]",option2:"int [] arr = new int[5]",option3:" int arr[] arr = new int[5]",option4:"int arr[] = int [5] new" }] ,correctAnswer:"option4",point: 2,difficultylevel:"hard",topic:"Data Structures",subTopic:"Arrays",courseCode:"CSE280",weekId:5})

db.QuizQuestions.insert({questionId:6,questionsText:"Which of these method can be used to increase the capacity of ArrayList object manually?",options:  [{option1:"ensureCapacity()",option2:"Capacity()",option3:"increaseCapacity()",option4:"increaseSize()"}],correctAnswer:"option1",point: 1,difficultylevel:"easy",topic:"Data Structures",subTopic:"Arraylist",courseCode:"CSE280",weekId:6})



db.createCollection("StudentPerformance",{
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
})


// Question 1 data

db.StudentPerformance.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:0,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option1",isCorrect:false,weekID:1})

db.StudentPerformance.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:0,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option2",isCorrect:false,weekID:1})

db.StudentPerformance.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S16",studentEmail:"S16@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:0,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option1",isCorrect:false,weekID:1})

db.StudentPerformance.insert({studentName:"S17",studentEmail:"S17@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S18",studentEmail:"S18@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})

db.StudentPerformance.insert({studentName:"S19",studentEmail:"S19@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:0,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option4",isCorrect:false,weekID:1})

db.StudentPerformance.insert({studentName:"S20",studentEmail:"S20@asu.edu",courseCode:"CSE280",totalScore:8,studentScore:10,topic:"Introduction to programming and  Expressions",subTopic:"TypeConversions",strengthCategory:"Weak",questionId:1,submittedAnswer:"option3",isCorrect:true,weekID:1})


//Question 2 Data
