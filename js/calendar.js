$(document).ready(function(){

//Put our input DOM element into a jQuery Object
var $jqDate = jQuery('input[name="jqueryDate"]');

//Bind keyup/keydown to the input
$jqDate.bind('keyup','keydown', function(e){

  //To accomdate for backspacing, we detect which key was pressed - if backspace, do nothing:
    if(e.which !== 8) {
        var numChars = $jqDate.val().length;
        if(numChars === 2 || numChars === 5){
            var thisVal = $jqDate.val();
            thisVal += '/';
            $jqDate.val(thisVal);
        }
  }
});


$('#Name, #birthDate').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#goButton').click();//Trigger search button click event
        }
  });


$('#goButton').on('click', function(){

  // Check the inputs are filled in
  if (!$('#Name').val()) {
        $('#Name').focus();
  }else if (!$('#birthDate').val()) {
    $('#birthDate').focus();
  }else{
  //content variable
  var content = "";
  // get variable Name and Date
  var name = $('#Name').val();

  // Create a date from the input of the dates (crossbrowser dates)
  var parts = jQuery('input[name="jqueryDate"]').val().split('/');
  var dateInput = new Date(parts[2],parts[1]-1,parts[0]);

  // var dateInput = new Date($('#birthDate').val());
  var today = new Date();
  // calculate number ob bullets
  var timeDiff = Math.abs(today.getTime() - dateInput.getTime());
  var weeks = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7));
  console.log('weeks: '+weeks +'||| datInput: ' + dateInput);
  console.log('Today: '+today.getFullYear()+'||| datInput YEAR: ' + dateInput.getFullYear());


  // Print bullets
  if (today.getFullYear() < dateInput.getFullYear()) {

    $('.calendarContainer').empty();

    $('.calendarContainer').append(' <img src="./img/backtofuture.jpg" style="margin: 30px auto; max-width: 300px;" class="img-responsive" alt=""> <h1 style="color: #757575; font-size:23px;text-align: center; margin:30px;">Do you come from the future?<br>Tell me more about it!</h1>');
    $('.calendarContainer').css('opacity', '1');
    $('.calendarContainer').css('transform', 'scale(1)');

  }else{
    $('#downloadBTN, #problem, #subsBBTN').removeClass("hide");

    var year = dateInput.getFullYear();
    var month = dateInput.getMonth();
    var day = dateInput.getDate();
    var weekscount = 0;
    var finalDate = new Date(year + 80, month + 1, day);
    var totalweeks = Math.ceil(Math.abs(finalDate.getTime() - dateInput.getTime()) / (1000 * 3600 * 24 * 7));
    var parameter = 0;

    $('.calendarContainer').empty();
    content += '<p style="color: #757575; font-size:23px;text-align: center; margin-top:30px;">'+ name +' 80 years weekly calendar</p>';

    if (weeks < totalweeks) {
      var parameter = weeks;
    }else{
      var parameter = totalweeks;
    }

    for (var i = 0; i <= parameter; i++) {

      if (i - weekscount === 0) {
        content += '<svg height="16" width="16"> <circle cx="8" cy="8" r="5" stroke-width="0" fill="#fc6938"/></svg>';
        year = year + 1;
        // Date of next birthday
        var nextYear = new Date(year, month, day);
        // Number of weeks between
        var timeDiff = Math.abs(nextYear.getTime() - dateInput.getTime());
        var weeksBetween = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7));
        weekscount = weeksBetween;

      }else{
      content += '<svg height="16" width="16"> <circle cx="8" cy="8" r="5" stroke-width="0" fill="#242933"/></svg>';
      }
    }
    for (i; i <= totalweeks; i++) {
      content += '<svg height="16" width="16"> <circle cx="8" cy="8" r="5" stroke-width="0" fill="#bdbfc2"/></svg>';

    }
    content += '<p id="year" style="text-align: left; margin: 0px; display: inline-block; font-size: 14px; color: rgba(190, 191, 194, 1);"> <-' + finalDate.getFullYear() +'</p>';
    content += '<div style="width: 100%;"> <p style="text-align: center;"> <svg height="10" width="10"> <circle cx="5" cy="5" r="5" stroke-width="0" fill="#fc6938"/></svg> birthday week <svg height="10" width="10"> <circle cx="5" cy="5" r="5" stroke-width="0" fill="#242933"/></svg> past week <svg height="10" width="10"> <circle cx="5" cy="5" r="5" stroke-width="0" fill="#bdbfc2"/></svg> future week </p> </div>';
    content += '<div style="width: 100%;"> <p style="text-align: center;"> agustincastineira.com/calendar </div>';

  }

  $(".calendarContainer").append(content);

}

$('.calendarContainer').css('animation', 'fadeInUp 1.3s ease-out');
var top = $('.formcontainer').offset().top;
$('html, body').animate({
    scrollTop: top
},800, 'easeOutQuart');
});



$('#downloadBTN').on('click', function(){
      $('input[name=name], input[name=FNAME] ').val($('#Name').val());
      $('#problem1').removeClass('hide');
      var w = window.open();
      var html = $(".PrintWrapper").html();
      var htmlHead = '<link href="https://fonts.googleapis.com/css?family=Raleway:300" rel="stylesheet">   <style> @media print {.calendarContainer {width: 100%;} .year{display: inline-block; line-height: 14px; pargin-bottom: 0;} .svg{display: inline-block;} h1, p, a{text-align:center; font-family: "Raleway","Helvetica Neue",Helvetica,Arial,sans-serif; color: #757575;} @page {  size: A3; margin: 0; }}  .calendarContainer{ width:1040px; margin: 200px auto; margin-bottom: 0px;} body{overflow: visible;} h1, p, a{text-align:center; font-family: "Raleway","Helvetica Neue",Helvetica,Arial,sans-serif; color: #757575;}</style> '

        $(w.document.head).html(htmlHead);
        $(w.document.body).html(html);
        setTimeout(function () {
          w.document.close();
          w.focus();
          w.print();
          w.close();
        }, 1000);
});

$('#problem1, #problem2').on('click', function(){
  $('.problemContainer').toggleClass("showed");
});
$('.close').on('click', function(){
  $('.problemContainer').removeClass("showed");
});

$('.Loading').css('display','none');

});
