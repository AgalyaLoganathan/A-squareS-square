(function() {
    var questions = [{
    "question_title": "Question Title",
    "question_text": "This is the text to be answered. I pasted some random text to make it big. Individual form controls automatically receive some global styling.  There are further alternative methods of providing a label for assistive technologies, such as the aria-label, aria-labelledby or title attribute. If none of these is present, screen readers may resort to using the placeholder attribute, if present, but note that use of placeholder as a replacement for other labelling methods is not advised.",
    "question_options":[
        "option_1",
        "option_2",
        "option_3",
        "option_4"
    ]

}]

$('.initial_questions').click(function(){
    console.log("clicked "+$(this).attr("value"));
    var questionNumber = $(this).attr("value");
    var data = questions[questionNumber];
    var question_snippet = new EJS({url: '/views/initial_question.ejs'}).render({"details": data});
    $(".initial_quiz_container").innerHTML = question_snippet;
});
});
