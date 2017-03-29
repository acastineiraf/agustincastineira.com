$(document).ready(function(){

//function to load contact VIDEOS
function LoadVideo(){
if ($(window).width() > 768) {
document.getElementById("Video-Contact").src="./img/Desktop-Video.mp4";
}
}

// Navbar

    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210 && $(window).width() > 768) {
            $(".md-30#contact, .md-30#nav-cv").addClass('OneJump');
          };
        if(scroll_pos > 5 && $(window).width() < 769) {
            $(".navbar-custom").removeClass('initial');
          }else{
            $(".navbar-custom").addClass('initial');
          };
  });


function collapseNavbar(){
  $('.navbar-custom').addClass('Collapsed');
}
function expandNavbar(){
  $('.navbar-custom').removeClass('Collapsed');
}
function toggleNavbar(){
  $('.navbar-custom').toggleClass('Collapsed');
}
function isScrolledIntoView(elem) {
  var $window = $(window),
   docViewTop = $window.scrollTop(),
   docViewBottom = docViewTop + $window.height(),
   elemTop = $(elem).offset().top,
   elemBottom = elemTop + $(elem).outerHeight();
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$('.navbar-custom a:not(#contactButton, #nav-cv-button)').click(function(){
    if ($(window).width() > 768) {
      var top = $('body').find($(this).attr('href')).offset().top;
      $('html, body').animate({
          scrollTop: top
      },800, 'easeOutQuart');
    }else{
      var top = $('body').find($(this).attr('href')).offset().top;
      $('html, body').animate({
          scrollTop: top
      },800, 'easeOutQuart');
      toggleNavbar();
    }
    return false;
});

var $fire = 1
if ($(window).width() > 768) {
$(".navbar-custom").on("activate.bs.scrollspy", function(){
    switch ($('li.active a').attr('href')) {
      case '#Profile':
          $(".navbar-custom i").css('top', 'calc(50% - 25px)');
          $('.bar').removeClass('Value');
        break;
      case '#Skills':
            $(".navbar-custom i").css('top', 'calc(50% - 5px)');
            $('.bar').addClass('Value');
        break;
      case '#Projects':
            $(".navbar-custom i").css('top', 'calc(50% + 15px)');
            if ($fire == '1') {
                $(".projectButtons").first().addClass('Opened');
                $(".projectButtons").first().next('h5').addClass('Opened');
                $fire = 0
              }
            $('.bar').removeClass('Value');
        break;
      default:
    }
  });

}

if ($(window).width() <= 768) {
$(".navbar-custom").on("activate.bs.scrollspy", function(){
    switch ($('li.active a').attr('href')) {
      case '#Profile':
          $('.bar').removeClass('Value');
        break;
      case '#Skills':
            $('.bar').addClass('Value');
        break;
      case '#Projects':
            if ($fire == '1') {
                $(".projectButtons").first().addClass('Opened');
                $(".projectButtons").first().next('h5').addClass('Opened');
                $fire = 0
              }
            $('.bar').removeClass('Value');
        break;
      default:
    }
  });
}


$('.navbar-custom i#arrow').click(function(){
  toggleNavbar();
});


//   Preload first pictures

if (document.images) {

   img_0 = new Image();
	 img_1 = new Image();

   img_0.src = "./img/s1/orange.png";
   img_1.src = "./img/s1/Agus.jpg";

}

// Hero Section

if ($(window).width() < 769) {
var bg = $(".Hero")
var myPicture = $(".myPicture")
var projectsHolder =$(".projects-holder")

jQuery(window).resize("resizeBackground");

function resizeBackground() {
    $(".projects-holder").height(jQuery(window).height());
    $(".Hero").height(jQuery(window).height());
    $(".myPicture").height(jQuery(window).height()/2);
    $("#myCarousel").height(jQuery(window).width()*0.58);
}
resizeBackground();

if ($(window).height() < $(window).width() ) {
  var winHeight = $(window).height() - 20;
  $('.slide-custom').css('margin-top','0');
  $('#myCarousel').css('height',winHeight + 'px')

}
}

$(function(){
  $(window).resize(function(){
      $('.Hero').css('height', $(window).height()+'px');
      $('.Loading').css('height', $(window).height()+'px');

  })
});
$(".cardBtn").on('click', function(){
  $(this).parent().toggleClass("Collapsed")
});

//Projects

$('.projectButtons').click(function(){
  $(this).addClass('Opened');
  $(this).next('h5').addClass('Opened');
  $('.projectButtons').not(this).removeClass('Opened');
  $('.projectButtons').not(this).next('h5').removeClass('Opened');



  switch ($(this).attr('name')) {
    case 'webBtn':
      $("#productProjects").removeClass('carousel-inner').hide(200);
      $("#productProjects").children().removeClass('active');
      $("#uxProjects").removeClass('carousel-inner').hide(200);
      $("#uxProjects").children().removeClass('active');

      $("#productContent").hide();
      $("#uxContent").hide();
      $("#webContent").show();


      $("#webProjects").addClass('carousel-inner').show(200);
      $("#webProjects").children().first().addClass('active');

      break;
    case 'uxBtn':
      $("#productProjects").removeClass('carousel-inner').hide(200);
      $("#productProjects").children().removeClass('active');
      $("#webProjects").removeClass('carousel-inner').hide(200);
      $("#webProjects").children().removeClass('active');

      $("#productContent").hide();
      $("#uxContent").show();
      $("#webContent").hide();

      $("#uxProjects").addClass('carousel-inner').show(200);
      $("#uxProjects").children().first().addClass('active');

      break;
    case 'productBtn':
      $("#webProjects").removeClass('carousel-inner').hide(200);
      $("#webProjects").children().removeClass('active');
      $("#uxProjects").removeClass('carousel-inner').hide(200);
      $("#uxProjects").children().removeClass('active');

      $("#productContent").show();
      $("#uxContent").hide();
      $("#webContent").hide();

      $("#productProjects").addClass('carousel-inner').show(200);
      $("#productProjects").children().first().addClass('active');
    default:
  }


  if($(window).width() > 768){
  var bottom = $('#myCarousel').offset().top - 20;
}else{
  var bottom = $('#myCarousel').offset().top - 100;
}
  $('html, body').animate({
      scrollTop: bottom
  },800, 'easeInQuart');
  //Add breaks if height of the carousel changes
});



//CONTACT ME VIDEOS

$('i#close, #contactButton').click(function(){
  $('.contactMe, .contactBG').hide(200);
  idleWait = 2 * idleWaitHolder;
  // console.log("idleWait is:" + idleWait);
});



var idleTimer = null;
var idleState = false;
var idleWait = 10000;
var idleWaitHolder = 10000;

function idleFunction(){
        $('*').on('mousemove click keydown scroll', function () {
            clearTimeout(idleTimer);
            if (idleState == true) {
                // Reactivated event

                console.log("Welcome Back.");
                idleWaitHolder = idleWait;
                // console.log("idleWaitHolder is:" + idleWaitHolder);
                idleWait = 99999999;
                idleState = false;

            }else{
              if($('#newsletter, #cv').hasClass('in') == false && $(window).width() > 768){
                idleTimer = setTimeout(function () {
                    // Idle Event
                    // console.log("You've been out for " + idleWait/1000 + " seconds.");
                    LoadVideo();
                    $('.contactMe, .contactBG').show(300);
                    $(".md-30#contact").addClass('OneJump');
                    idleState = true; }, idleWait);
                  }
              }

        });

      };

if ($(window).width() > 768) {
idleFunction();
}


$('.Loading').css('display','none');

// Preload images from the second half

if (document.images) {

   img0 = new Image();
	 img1 = new Image();
	 img2 = new Image();
   img4 = new Image();
   img5 = new Image();
   img6 = new Image();
   img7 = new Image();
   img8 = new Image();
   img9 = new Image();
   img10 = new Image();
   img11 = new Image();
   img12 = new Image();
   img13 = new Image();
   img14 = new Image();
   img15 = new Image();
   img16 = new Image();
   img17 = new Image();
   img18 = new Image();
   img19 = new Image();
   img20 = new Image();
   img21 = new Image();
   img22 = new Image();
	 img23 = new Image();

  img0.src = "./img/s3/bg1.jpg";
	img1.src = "./img/project3-1.jpg";
  img2.src = "./img/project3-2.jpg";
  img4.src = "./img/project3-4.jpg";
  img5.src = "./img/project3-5.jpg";
  img6.src = "./img/project3-6.jpg";
  img7.src = "./img/project3-7.jpg";
  img8.src = "./img/project3-8.jpg";
  img9.src = "./img/project3-9.jpg";
  img10.src = "./img/project3-10.jpg";
  img11.src = "./img/project3-11.jpg";
  img12.src = "./img/project1-8.jpg";
  img13.src = "./img/project2-1.jpg";
  img14.src = "./img/project2-2.jpg";
  img15.src = "./img/project2-3.jpg";
  img16.src = "./img/project2-4.jpg";
  img17.src = "./img/project1-1.jpg";
  img18.src = "./img/project1-2.jpg";
  img19.src = "./img/project1-3.jpg";
  img20.src = "./img/project1-4.jpg";
  img21.src = "./img/project1-5.jpg";
  img22.src = "./img/project1-6.jpg";
  img23.src = "./img/project1-7.jpg";



}

});
