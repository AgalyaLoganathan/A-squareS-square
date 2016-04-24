// This ohholds the template for questions on dashboard

question_template = '<div class="carousel-content"> ' +
'<div class="panel-head">' +
'<h3 style="text-align: center;"> ' + temp.topic + '</h3> ' +
'</div> ' +
'<div class="panel-body"> ' +
'    <div> ' +
'    <div style="text-align: left; font-size: 20px"><B>' + temp.subtopic + '</B></div>' +
'    <div style="text-align: right; font-size: 18px">' + temp.question_title + '</div> ' +
'    </div> ' +
'</div> ' +
'<div class="panel-body">' +
'    <div class="col-xs-12 col-sm-9 question_section" style="padding: 10px 10px 30px 30px">' +
'    <form class="student_course_quiz_question"> ' +
'      <div class="form-group"> ' +
'        <p class="question_block"> ' + temp.question_text + ' </p> ' +
'      </div> ' +
'        <div class="checkbox"> ' +
'        <label> ' +
'          <input type="checkbox"> ' + temp.question_options[0] +
'        </label> ' +
'      </div> ' +

'        <div class="checkbox"> ' +
'        <label> ' +
'          <input type="checkbox"> ' + temp.question_options[1] +
'        </label> ' +
'      </div> ' +

'        <div class="checkbox"> ' +
'        <label> ' +
'          <input type="checkbox"> ' + temp.question_options[2] +
'        </label> ' +
'      </div> ' +

'        <div class="checkbox"> ' +
'        <label> ' +
'          <input type="checkbox"> ' + temp.question_options[3] +
'        </label> ' +
'      </div> ' +

'      <button type="submit" class="btn btn-primary" style="text-align: center;">Submit</button>' +
'    </form>' +
'    </div>' +
'      </div> ' +
'     </div> --> ' +
' </div> <!-- /panel body -->'
'</div></div>'
