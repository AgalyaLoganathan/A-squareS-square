
var nodemailer = require("nodemailer");

exports.dashboard = function(req,res){
	   auth: {
	   var smtpTransport = nodemailer.createTransport("SMTP",{
	   service: "Gmail",
	       	user: "akshay.manikandan@gmail.com",
       		pass: "ak1sh2ay3"
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

};

