use quiz_of_the_day
db.dropDatabase()
use quiz_of_the_day
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
