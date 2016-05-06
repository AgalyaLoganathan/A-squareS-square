use quiz_of_the_day
db.dropDatabase()
use quiz_of_the_day

db.users.drop()

// Create user Collection
db.createCollection("users",{
  userName: { type: String },
  emailId: { type: String },
  role : { type: String },
  password : { type: String },
  courseCode : {type: String}
})

// Populate user Collection
db.users.insert( {userName:"S1",emailId:"S1@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S2",emailId:"S2@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S3",emailId:"S3@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S4",emailId:"S4@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S5",emailId:"S5@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S6",emailId:"S6@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S7",emailId:"S7@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S8",emailId:"S8@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S9",emailId:"S9@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S10",emailId:"S10@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S11",emailId:"S11@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S12",emailId:"S12@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S13",emailId:"S13@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S14",emailId:"S14@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"S15",emailId:"S15@asu.edu",role:"Student",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )
db.users.insert( {userName:"I1",emailId:"I1@asu.edu",role:"Instructor",password:"123",courseCode:"CSE 280 - Intro to JAVA Programming"} )

db.calendars.drop()
db.createCollection("calendars",{
  weekId: Number,
  startDate : { type: Date},
  endDate : { type: Date }
})

db.calendars.insert({weekId:1,startDate: new Date('04-18-2016'),endDate: new Date('04-24-2016')})
db.calendars.insert({weekId:2,startDate: new Date('04-25-2016'),endDate: new Date('05-01-2016')})
db.calendars.insert({weekId:3,startDate: new Date('05-02-2016'),endDate: new Date('05-08-2016')})
db.calendars.insert({weekId:3,startDate: new Date('05-09-2016'),endDate: new Date('05-15-2016')})



db.questionrecommendations.drop()
db.createCollection("questionrecommendations",{
  weekId: Number,
  questionId: Number,
  topic: { type: String },
  subTopic: { type: String },
  reco: { type : Array}
})

db.questionrecommendations.insert({weekId:1,questionId:1,topic:"Introduction to programming and Expressions",subTopic:"Java Platform",reco:[{recotext:"Now that we have the Java platform on our systems and have run the first program successfully, we are geared towards understanding how programs are actually made. As we have already discussed, a program is a set of instructions, which are tasks provided to a computer. These instructions are called statements in Java. Statements can be anything from a single line of code to a complex mathematical equation. Consider the following line:",is_useful:true}, {recotext:"It makes sure that floating point calculations result precisely the same regardless of the underlying operating system and hardware platform, even if more precision could be obtained. This is compatible with the earlier version of Java 1.1 . If you need that use it.",is_useful:false} ]})

db.questionrecommendations.insert({weekId:1,questionId:2,topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",reco:[{recotext:"Unlike in many other object-oriented programming languages, Java performs automatic garbage collection — any unreferenced objects are automatically erased from memory — and prohibits the user from manually destroying objects.",is_useful:true}, {recotext:"The inheritance is one of the most powerful mechanism of the Object Oriented Programming. It allows the reuse of the members of a class (called the superclass or the mother class) in another class (called subclass, child class or the derived class) that inherits from it. This way, classes can be built by successive inheritance.",is_useful:false}]})

db.questionrecommendations.insert({weekId:1,questionId:3,topic:"Introduction to programming and Expressions",subTopic:"Expressions",reco:[{recotext:"Multiple assignment statements with expressions. 1 int firstNumber = 10;2 int secondNumber = 20;3 int result = firstNumber + secondNumber;4 System.out.println(result);5 secondNumber = 30;6 System.out.println(result);",is_useful:true}, {recotext:"As decimal numbers such as 1995, 51966. Negative decimal numbers such as -42 are actually expressions consisting of the integer literal with the unary negation operation -. As octal numbers, using a leading 0 (zero) digit and one or more additional octal digits (digits between 0 and 7), such as 077. Octal numbers may evaluate to negative numbers; for example 037777777770 is actually the decimal value -8. As hexadecimal numbers, using the form 0x (or 0X) followed by one or more hexadecimal digits (digits from 0 to 9, a to f or A to F). For example, 0xCAFEBABEL is the long integer 3405691582. Like octal numbers, hexadecimal literals may represent negative numbers. Starting in J2SE 7.0, as binary numbers, using the form 0b (or 0B) followed by one or more binary digits (0 or 1). For example, 0b101010 is the integer 42. Like octal and hex numbers, binary literals may represent negative numbers.",is_useful:false},{recotext:"On the other hand, Java is also known as a hybrid language. While supporting object oriented programming (OOP), Java is not a pure OO language like Smalltalk or Ruby. Instead, Java offers both object types and primitive types. Primitive types are used for boolean, character, and numeric values and operations. This allows relatively good performance when manipulating numeric data, at the expense of flexibility. For example, you cannot subclass the primitive types and add new operations to them.",is_useful:false} ]})


db.questionrecommendations.insert({weekId:1,questionId:4,topic:"Introduction to programming and Expressions",subTopic:"Literals",reco:[{recotext:"A primitive type should be set by an appropriate value. The primitive types can be initialized with a literal. Most of the literals are primitive type values, except String Literals, which are instance of the String class.",is_useful:false}, {recotext:"Java Literals are syntactic representations of boolean, character, numeric, or string data. Literals provide a means of expressing specific values in your program. For example, in the following statement, an integer variable named count is declared and assigned an integer value. The literal 0 represents, naturally enough, the value zero.",is_useful:false},{recotext:"The code section 3.62 contains two number literals followed by two boolean literals at line 1, one string literal followed by one number literal at line 2, and one string literal followed by one real number literal at line 3:",is_useful:false} ]})


db.questionrecommendations.insert({weekId:1,questionId:5,topic:"Introduction to programming and Expressions",subTopic:"Variables",reco:[{recotext:"When member variables are marked with this keyword, it changes the runtime behavior in a way that is noticeable when multiple threads access these variables. Without the volatile keyword, one thread could observe another thread update member variables in an order that is not consistent with what is specified in sourcecode. Unlike the synchronized keyword, concurrent access to a volatile field is allowed.",is_useful:false}, {recotext:"Solves ambiguity between instance variables and parameters . Used to pass current object as a parameter to another method.",is_useful:true},{recotext:"Instance variables: These are variables that are used to store the state of an object (for example, id). Every object created from a class definition would have its own copy of the variable. It is valid for and occupies storage for as long as the corresponding object is in memory. Class variables: These variables are explicitly defined within the class-level scope with a static modifier (for example, isClassUsed). No other variables can have a static modifier attached to them. Because these variables are defined with the static modifier, there would always be a single copy of these variables no matter how many times the class has been instantiated. They live as long as the class is loaded in memory. Parameters or Arguments: These are variables passed into a method signature (for example, parameter). Recall the usage of the args variable in the main method. They are not attached to modifiers (i.e. public, private, protected or static) and they can be used everywhere in the method. They are in memory during the execution of the method and can't be used after the method returns. Local variables: These variables are defined and used specifically within the method-level scope (for example, currentValue) but not in the method signature. They do not have any modifiers attached to it. They no longer exist after the method has returned.",is_useful:true} ]})

db.questionrecommendations.insert({weekId:2,questionId:6,topic:"Classes,Objects and Designs",subTopic:"Objects",reco:[{recotext:"You can specify a restriction on the types of classes that may be used. For example, <? extends ClassName> only allows objects of class ClassName or a subclass. For example, to create a collection that may only contain Serializable objects, specify:",is_useful:false}, {recotext:"Unlike in many other object-oriented programming languages, Java performs automatic garbage collection — any unreferenced objects are automatically erased from memory — and prohibits the user from manually destroying objects.",is_useful:true},{recotext:"Static variables can be used as data sharing amongst objects of the same class. For example to implement a counter that stores the number of objects created at a given time can be defined as so:",is_useful:false} ]})

db.questionrecommendations.insert({weekId:2,questionId:7,topic:"Classes,Objects and Designs",subTopic:"Classes",reco:[{recotext:"The classes Integer and String belongs to the package java.lang but they don't need to be imported as the java.lang package is implicitly imported in all classes.",is_useful:false}, {recotext:"If you have objects from different classes that do not have a common superclass, you can't call the same method in those classes, even if the two classes implement a method with the same signature.",is_useful:false},{recotext:"Some classes can't be inherited. Those classes are defined with the final keyword. For instance, the Integer class can't have subclasses. It is called a final class.",is_useful:false} ]})

db.questionrecommendations.insert({weekId:2,questionId:8,topic:"Classes,Objects and Designs",subTopic:"Comparing Objects",reco:[{recotext:"Generic comparator. 1 Comparator<Animal> myAnimalComparator = new AnimalComparator();2 3 static int compareTwoDogs(Comparator<? super Dog> comp, Dog dog1, Dog dog2) {4   return comp.compare(dog1, dog2);5 }",is_useful:false}, {recotext:"Since Java 5.0, the Comparator interface is generic; that means when you implement it, you can specify what type of objects your comparator can compare.",is_useful:false} ]})

db.questionrecommendations.insert({weekId:2,questionId:9,topic:"Classes,Objects and Designs",subTopic:"Methods",reco:[{recotext:"When a name of a method is encountered in a flow, it stops execution in the current method and branches to the newly called method. After returning a value from the called method, execution picks up at the original method on the line below the method call.",is_useful:false}, {recotext:"A static method is a method that can be called without an object instance. It can be called on the class directly. For example, the valueOf(String) method of the Integer class is a static method:",is_useful:false} ]})

db.questionrecommendations.insert({weekId:2,questionId:10,topic:"Classes,Objects and Designs",subTopic:"Constructors",reco:[{recotext:"The constructor is a special method called automatically when an object is created with the new keyword. Constructor does not have a return value and its name is the same as the class name. Each class must have a constructor. If we do not define one, the compiler will create a default so called empty constructor automatically.",is_useful:true}, {recotext:"Automatically created constructor. 1 public class MyClass {2   /**3   * MyClass Empty Constructor4   */5   public MyClass() {6   }}",is_useful:true},{recotext:"The following constructor builds an array list that has the specified initial capacity. The capacity is the size of the underlying array that is used to store the elements.",is_useful:true} ]})

db.questionrecommendations.insert({weekId:3,questionId:11,topic:"Conditional Statements",subTopic:"Java Platform",reco:[{recotext:"This evaluates boolean expression1, and if it is true then the conditional expression has the value of expression1; otherwise the conditional expression has the value of expression2.",is_useful:true}, {recotext:"Conditional branching is attained with the help of the if...else and switch statements. A conditional branch occurs only if a certain condition expression evaluates to true.",is_useful:false},{recotext:"The switch conditional statement is basically a shorthand version of writing many if...else statements. The syntax for switch statements is as follows:",is_useful:false} ]})
db.questionrecommendations.insert({weekId:3,questionId:12,topic:"Conditional Statements",subTopic:"Java Platform",reco:[{recotext:"Conditional branching is attained with the help of the if...else and switch statements. A conditional branch occurs only if a certain condition expression evaluates to true.",is_useful:true}, {recotext:"This evaluates boolean expression1, and if it is true then the conditional expression has the value of expression1; otherwise the conditional expression has the value of expression",is_useful:false},{recotext:"Program flow can be affected using function/method calls, loops and iterations. Of various types of branching constructs, we can easily pick out two generic branching methods.",is_useful:false} ]})
db.questionrecommendations.insert({weekId:3,questionId:13,topic:"Conditional Statements",subTopic:"Java Platform",reco:[{recotext:"while loops are the simplest form of loop. The while loop repeats a block of code while the specified condition is true. Here is the structure of a while loop:",is_useful:true}, {recotext:"The for loop is like a template version of the while loop. The alternative code using a while loop would be as follows",is_useful:false},{recotext:"The do-while loop is functionally similar to the while loop, except the condition is evaluated AFTER the statement executes",is_useful:false} ]})
db.questionrecommendations.insert({weekId:3,questionId:14,topic:"Conditional Statements",subTopic:"Java Platform",reco:[{recotext:"This is part of the switch statement, to find if the value passed to the switch statement matches a value followed by case.",is_useful:true}, {recotext:"The switch conditional statement is basically a shorthand version of writing many if...else statements. The syntax for switch statements is as follows:",is_useful:false},{recotext:"The switch conditional statement is basically a shorthand version of writing many if...else statements. The switch block evaluates a char, byte, short, or int (or enum, starting in J2SE 5.0; or String, starting in J2SE 7.0), and, based on the value provided, jumps to a specific case within the switch block and executes code until the break command is encountered or the end of the block. If the switch value does not match any of the case values, execution will jump to the optional default case",is_useful:false} ]})
db.questionrecommendations.insert({weekId:3,questionId:15,topic:"Conditional Statements",subTopic:"Java Platform",reco:[{recotext:"The for loop is like a template version of the while loop. The alternative code using a while loop would be as follows",is_useful:true}, {recotext:"while loops are the simplest form of loop. The while loop repeats a block of code while the specified condition is true. Here is the structure of a while loop",is_useful:false},{recotext:"The do-while loop is functionally similar to the while loop, except the condition is evaluated AFTER the statement executes",is_useful:false} ]})

db.questionrecommendations.insert({weekId:4,questionId:16,topic:"Inheritance",subTopic:"Inheritance",reco:[{recotext:"The inheritance is one of the most powerful mechanism of the Object Oriented Programming. It allows the reuse of the members of a class (called the superclass or the mother class) in another class (called subclass, child class or the derived class) that inherits from it. This way, classes can be built by successive inheritance",is_useful:true}, {recotext:"Java does not support full orthogonal multiple inheritance (i.e. Java does not allow you to create a subclass from two classes). Multiple inheritance in C++ has complicated rules to disambiguate fields and methods inherited from multiple superclasses and types that are inherited multiple times. By separating interface from implementation, interfaces offer much of the benefit of multiple inheritance with less complexity and ambiguity. The price of no multiple inheritance is some code redundancy; since interfaces only define the signature of a class but cannot contain any implementation, every class inheriting an interface must provide the implementation of the defined methods, unlike in pure multiple inheritance, where the implementation is also inherited. The major benefit of that is that all Java objects can have a common ancestor (a class called Object)",is_useful:false},{recotext:"In the Code listing 4.10, the class Car inherits from Vehicle, which means that the attributes speed and numberOfSeats are present in the class Car, whereas they are defined in the class Vehicle. Also, the constructor defined in the class Car allows to initialize those attributes. In Java, the inheritance mechanism allows to define a class hierarchy with all the classes. Without explicit inheritance, a class implicitly inherits from the Object class. This Object class is the root of the class hierarchy.",is_useful:false} ]})

db.questionrecommendations.insert({weekId:4,questionId:17,topic:"Inheritance",subTopic:"Interfaces",reco:[{recotext:"It is also possible to let an enumeration implement interfaces other than java.lang.Comparable and java.io.Serializable, which are already implicitly implemented by each enumeration",is_useful:true}, {recotext:"Note that the instanceof operator can also be applied to interfaces. For example, if the example above was enhanced with the interface",is_useful:false},{recotext:"The interface methods and interfaces are always public. You do not need to specify the access modifier. It will default to public. For clarity it is considered a good practice to put the public keyword",is_useful:false} ]})
db.questionrecommendations.insert({weekId:4,questionId:18,topic:"Inheritance",subTopic:"Overloading",reco:[{recotext:"Code section 4.24: Bad method overloading. 1 public void logIt(String param, String err) { 2   ...3 }4 5 public void logIt(String err, String param) {6   ...7 }",is_useful:true}, {recotext:"",is_useful:false},{recotext:"Code section 4.22: Method overloading. 1 public void runAroundThe(Building block) { 2   ... 3 } 4  5 public void runAroundThe(Park park) { 6   ... 7 }",is_useful:false} ]})

db.questionrecommendations.insert({weekId:4,questionId:19,topic:"Inheritance",subTopic:"Scope",reco:[{recotext:"The scope of a class, a variable or a method is its visibility and its accessibility. The visibility or accessibility means that you can use the item from a given place.",is_useful:true}, {recotext:"You surely would have noticed by now, the words public, protected and private at the beginning of class's method declarations used in this book. These keywords are called the access modifiers in the Java language syntax, and they define the scope of a given item.",is_useful:false},{recotext:"The obj variable contains the object reference pointing to an object created from the MyObject class. The obj object reference is in scope inside the { }. After the } the object becomes garbage. Object references can be passed in to methods and can be returned from methods.",is_useful:false} ]})

db.questionrecommendations.insert({weekId:4,questionId:20,topic:"Inheritance",subTopic:"Object life Cycle",reco:[{recotext:"A negative integer means that the current object is before the parameter object in the natural ordering. Zero means that the current object and the parameter object are equal. A positive integer means that the current object is after the parameter object in the natural ordering",is_useful:true}, {recotext:"the thrown exception object is the same as the exception object specified by the catch-block. the thrown exception object is the subtype of the exception object specified by the catch-block.",is_useful:false} ]})


db.studentinitialstrengthquizzes.drop()
db.createCollection("studentinitialstrengthquizzes",{
  studentName: { type: String },
  studentEmail: {type: String},
  courseCode: { type: String },
  isExpert: Boolean
})

db.studentinitialstrengthquizzes.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:true})
db.studentinitialstrengthquizzes.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})
db.studentinitialstrengthquizzes.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",isExpert:false})

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

db.relatedtopics.insert({topic:"Conditional Statements",relatedtopics:["Classes,Objects and Designs","Collections"]})

db.quizquestions.drop()
//Create Quizquestions Collections
db.createCollection("quizquestions",{
  questionId: Number,
  questionText: {type: String},
  options: [{type: String}],
  correctAnswer: {type: String},
  points: Number,
  difficultylevel: { type: String },
  topic: { type: String },
  subTopic: { type: String },
  InstructorUrl : {type:String },
  weekId: Number
})



// Populate questions Table

// Week 1
db.quizquestions.insert({questionId:1,questionsText:"________ are not machine instructions and therefore, Java interpreter generates machine code that can be directly executed by the machine that is running the Java program.",options:["Compiled Instructions","Compiled code","byte code","Java mid code"],correctAnswer:"byte code",points: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"Java Platform",InstructorUrl:"",weekId:1})

db.quizquestions.insert({questionId:2,questionsText:"The term __________ means the ability to take many forms.",options:  ["Inheritance","Polymorphism","Member function","Encapsulation"],correctAnswer:"Polymorphism",points: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"OOPs Concepts",InstructorUrl:"",weekId:1})

db.quizquestions.insert({questionId:3,questionsText:"The order of precedence from highest to lowest is :",options:  ["&&, /, |,{}","%, <=, &&, =","<, !, ==, ++","+, -, [], !="],correctAnswer:"%, <=, &&, =",points: 2,difficultylevel:"hard",topic:"Introduction to programming and Expressions",subTopic:"Expressions",InstructorUrl:"",weekId:1})

db.quizquestions.insert({questionId:4,questionsText:"Which type of literal is written in pair of single quote ?",options:  ["Boolean","Double","Integer","Character"],correctAnswer:"Character",points: 2,difficultylevel:"hard",topic:"Introduction to programming and Expressions",subTopic:"Literals",InstructorUrl:"",weekId:1})

db.quizquestions.insert({questionId:5,questionsText:"When a data type must contain decimal numbers, assign the type",options:  ["Integer","Character","Double","Boolean"],correctAnswer:"Double",points: 1,difficultylevel:"easy",topic:"Introduction to programming and Expressions",subTopic:"Variables",InstructorUrl:"",weekId:1})


// Week 2

db.quizquestions.insert({questionId:6,questionsText:"Which of these class relies upon its subclasses for complete implementation of its methods?",options:  ["Object Class","abstract class","Arraylist Class","None of the above"],correctAnswer:"abstract class",points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Objects",InstructorUrl:"",weekId:2})

db.quizquestions.insert({questionId:7,questionsText:"Which of the following is a valid declaration of an object of class Box?",options:  ["Box obj = new Box();","Box obj = new Box;","obj = new Box();","new Box obj;"],correctAnswer:"Box obj = new Box();",points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Classes",InstructorUrl:"",weekId:2})

db.quizquestions.insert({questionId:8,questionsText:"Which of these method of class String is used to compare two String objects for their equality?",options:  ["equals()","Equals()","isequal()","Isequal()"],correctAnswer:"equals()",points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Comparing Objects",InstructorUrl:"",weekId:2})

db.quizquestions.insert({questionId:9,questionsText:"What will be the return type of a method that not returns any value?",options:  ["void","int","double","none of these"],correctAnswer:"void",points: 1,difficultylevel:"easy",topic:"Classes,Objects and Design",subTopic:"Methods",InstructorUrl:"",weekId:2})

db.quizquestions.insert({questionId:10,questionsText:"What is the return type of Constructors?",options:  ["int","float","void","None of the mentioned"],correctAnswer:"None of the mentioned",points: 2,difficultylevel:"hard",topic:"Classes,Objects and Design",subTopic:"Constructors",InstructorUrl:"",weekId:2})

//Week 3

db.quizquestions.insert({questionId:11,questionsText:"The control expression in an if statement must be:",options:  [" an expression with type integer","an expression with either the type boolean or integer ","an expression with either the type boolean or integer with value 0 or 1 "," an expression with type boolean"],correctAnswer:" an expression with type boolean",points: 2,difficultylevel:"hard",topic:"Conditional Statements",subTopic:"if block",InstructorUrl:"",weekId:3})

db.quizquestions.insert({questionId:12,questionsText:"Which branching statement will cause a program to immediately exit a loop?",options:  ["break","continue","return","All of the above"],correctAnswer:"break",points: 2,difficultylevel:"hard",topic:"Conditional Statements",subTopic:"Branching statements",InstructorUrl:"",weekId:3})

db.quizquestions.insert({questionId:13,questionsText:"A do-while loop is useful when we want the statement within the loop to be executed",options:  ["only once","at least once","more than once","none of the above"],correctAnswer:"at least once",points: 2,difficultylevel:"hard",topic:"Conditional Statements",subTopic:"while loops",InstructorUrl:"",weekId:3})

db.quizquestions.insert({questionId:14,questionsText:"Switch case checks for",options:  ["equality","greather than","less than","none of the above"],correctAnswer:"equality",points: 1,difficultylevel:"easy",topic:"Conditional Statements",subTopic:"Switch Statements",InstructorUrl:"",weekId:3})

db.quizquestions.insert({questionId:15,questionsText:"Each pass through a loop is called a/an",options:  ["enumeration","iteration","culmination","pass through"],correctAnswer:"iteration",points: 1,difficultylevel:"easy",topic:"Conditional Statements",subTopic:"For loops",InstructorUrl:"",weekId:3})

//Week 4

db.quizquestions.insert({questionId:16,questionsText:"What type of inheritance does Java have? ",options:  ["single inheritance","double inheritance","multiple inheritance","class inheritance"],correctAnswer:"single inheritance",points: 1,difficultylevel:"easy",topic:"Inheritance",subTopic:"Inheritance",InstructorUrl:"",weekId:4})

db.quizquestions.insert({questionId:17,questionsText:"Which of these keywords is used to define interfaces in Java?",options:  ["inheritance","extends","interface","super"],correctAnswer:"interface",points: 1,difficultylevel:"easy",topic:"Inheritance",subTopic:"Interfaces",InstructorUrl:"",weekId:4})

db.quizquestions.insert({questionId:18,questionsText:"What is process of defining two or more methods within same class that have same name but different parameters declaration?",options:  ["method overloading","method overriding","imethod hiding","None of the mentioned"],correctAnswer:"method overloading",points: 1,difficultylevel:"easy",topic:"Inheritance",subTopic:"Interface",InstructorUrl:"",weekId:4})

db.quizquestions.insert({questionId:19,questionsText:"Scope refers to",options:  ["Life of the object","initialization of object","garbage collection","super class"],correctAnswer:"Life of the object",points: 1,difficultylevel:"easy",topic:"Inheritance",subTopic:"Scope",InstructorUrl:"",weekId:4})

db.quizquestions.insert({questionId:20,questionsText:"How many states are there in Object life cycle",options:  ["1","2","7","8"],correctAnswer:"7",points: 1,difficultylevel:"easy",topic:"Inheritance",subTopic:"Object life Cycle",InstructorUrl:"",weekId:4})

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

// Question 11 data

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Strong",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:2,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:2,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:4,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:2,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:2,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:1,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:11,topic:"Conditional Statements",subTopic:"if block",submittedAnswer:3,isCorrect:true,weekId:3})


// Question 12

db.studentperformances.insert({studentName:"S1",studentEmail:"S1@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Strong",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S2",studentEmail:"S2@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S3",studentEmail:"S3@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S4",studentEmail:"S4@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:2,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S5",studentEmail:"S5@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S6",studentEmail:"S6@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:2,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S7",studentEmail:"S7@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:4,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S8",studentEmail:"S8@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S9",studentEmail:"S9@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S10",studentEmail:"S10@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S11",studentEmail:"S11@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:2,isCorrect:false,weekId:3})

db.studentperformances.insert({studentName:"S12",studentEmail:"S12@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S13",studentEmail:"S13@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S14",studentEmail:"S14@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:1,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:1,isCorrect:true,weekId:3})

db.studentperformances.insert({studentName:"S15",studentEmail:"S15@asu.edu",courseCode:"CSE 280 - Intro to JAVA Programming",studentScore:0,strengthCategory:"Weak",questionId:12,topic:"Conditional Statements",subTopic:"Branching statements",submittedAnswer:3,isCorrect:false,weekId:3})


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
