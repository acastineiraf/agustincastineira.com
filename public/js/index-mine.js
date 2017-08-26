
$(document).ready(function(){

// set hero content margins
function resizeMargin(){
  if ($(window).height() > 185) {
    var themargin = ($(window).height() - 155) / 2;
    $('#hero').css('margin', themargin +'px auto');
  }
}
resizeMargin();
$(window).on('resize', function(){
      resizeMargin();
});

// Hover on candys
  $('.candy').hover( function(){
    $(this).next('.candy-title').css('opacity','1');
    $(this).toggleClass("no-radar");
  }, function(){
    $(this).next('.candy-title').css('opacity','0');
    $(this).toggleClass("no-radar");
  });

// Make contact me appear
var scroll_pos = 0;

$(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 210) {
        $("#contact-subscribe").removeClass('collapsed');
      };
});


// click on candys
var worktop = $('html').find($('#work')).offset().top;
$('.candy').click(function(){
$('#AllCardsHolder').removeClass('yesShow');
$('#AllCardsHolder').empty();

function loadCards(id,homeOrmodal,projectID){
  $(id).append('<div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0" id="'+homeOrmodal+'"><div class="cardHolder" projectName="'+projectID.name+'"><div class="card" id="'+ projectID.type +'"><div class="cardBG"></div><img src="'+ projectID.folderD +'/thumbnail.jpg" class="img-responsive card-picture" alt=""><p class="link-mobile"><b>see more ></b></p><div class="cardContent"><h3 class="card-title">'+ projectID.title +'</h3><p class="card-description">'+ projectID.description +'</p></p></div></div><div class="card-candy"><h3></h3></div></div></div>');
};

// Load projects cards that match the clicked candy.
for (var i = 0; i < allProjects.length; i++) {
 if ($(this).attr("id") === allProjects[i].type) {
   loadCards('#AllCardsHolder',"home-card",allProjects[i]);
 }else if ($(this).attr("id") === "A") {
   loadCards('#AllCardsHolder',"home-card",allProjects[i]);
 }
}

// Scroll to the top of the "work" section
var body = $("html, body");
  body.stop().animate({scrollTop:worktop}, '300', 'swing', function(){
    $('#AllCardsHolder').addClass('yesShow');
});

// On mobile, show candy title.
if ($(window).width() < 768) {
    $('.candy').addClass("hover");
}
});


//function to include related projects in the footer of the modal
function addRelateds(theprojectname){
  var counter = 0;
   $('#modal-container .modal-footer').append('<h3 style="text-align: center;">More related projects</h3>');
  for (var i = 0; i < allProjects.length ; i++) {
   if ((allProjects[i].type === theprojectname.type) && (allProjects[i].name != theprojectname.name) && (counter < 2) ) {
     $('#modal-container .modal-footer').append('<div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0 " id="modal-card"><div class="cardHolder" projectName="'+allProjects[i].name+'"><div class="card" id="'+ allProjects[i].type +'"><div class="cardBG"></div><img src="'+ allProjects[i].folderD +'/thumbnail.jpg" class="img-responsive card-picture" alt=""><p class="link-mobile"><b>see more ></b></p><div class="cardContent"><h3 class="card-title">'+ allProjects[i].title +'</h3><p class="card-description">'+ allProjects[i].description +'</p></div></div><div class="card-candy"><h3></h3></div></div></div>');
     counter = counter + 1;
   }
 }
}

  //function for including the content in the modal
  function fillProjectModal(theprojectname){

    $('#modal-container .modal-header h2, #modal-container .modal-body, #modal-container .modal-footer').empty();
    $('#modal-container .modal-header h2').append(theprojectname.title);

    //include images
    for (var i = 0; i < theprojectname.images.length; i++) {
      $('#modal-container .modal-body').append('<img src="'+ theprojectname.images[i] +'" class="img-responsive" alt="">')
    }

    $('#modal-container .modal-body').append(theprojectname.description);

    //include Contact me
    $('#modal-container .modal-body').append('<p><hr><br> If you are interested in working with me in a similar project or in a completely different one just <a href="#/" data-dismiss="modal" data-toggle="modal" data-target="#contact-form">drop me a line!</a></p>');

    //include related prjects in the footer
    addRelateds(theprojectname);

    //scroll to the top of the modal
    var Modalbody = $('#modal-container');
      Modalbody.stop().animate({scrollTop:0}, '300', 'swing');
  }

  // open project: include the content in the modal
  var projectName = "";
  $(document).on('click', '.cardHolder', function(){
    projectName = eval($(this).attr("projectName"));
    if (($(this).parent().attr('id') === "home-card") && ($(window).width() > 768)) {
      console.log("home-card | desktop");
      fillProjectModal(projectName);
      $('#modal-container').modal('show');
    }else if(($(this).parent().attr('id') === "home-card") && ($(window).width() < 769)){
      console.log("home-card | mobile");
      fillProjectModal(projectName);
      $('.cardHolder').addClass("hover");
    }else if(($(this).parent().attr('id') === "modal-card") && ($(window).width() > 768)){
        console.log("modal-card | desktop");
        fillProjectModal(projectName);
    }else if(($(this).parent().attr('id') === "modal-card") && ($(window).width() < 769)){
      console.log("modal-card | mobile");
      $('.cardHolder').addClass("hover");
    }
  });

  //only for mobile
  $(document).on('click', '.link-mobile', function(){
    fillProjectModal(projectName);
    $('#modal-container').modal('show');
  });

  // Thank you modal logic
  $('#problem1, #problem2').on('click', function(){
    $('.problemContainer').toggleClass("showed");
  });
  $('.close').on('click', function(){
    $('.problemContainer').removeClass("showed");
  });

  //hide the logo after loading everything
  $('.Loading').css('display','none');

  // Close modal using the back button
    $('div.modal').on('show.bs.modal', function() {
  	var modal = this;
  	var hash = modal.id;
  	window.location.hash = hash;
  	window.onhashchange = function() {
    		if (!location.hash){
    			$(modal).modal('hide')
    		}
    	}
    });

    $('div.modal').on('hide', function() {
    	var hash = this.id;
    	history.pushState('', document.title, window.location.pathname)
    });
  });
