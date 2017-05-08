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

// Make contact me appear
var scroll_pos = 0;
$(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 210) {
        $("#contact-subscribe").removeClass('collapsed');
      };
});

// Hover on candys
  $('.candy').hover( function(){$(this).next('.candy-title').css('opacity','1')}, function(){$(this).next('.candy-title').css('opacity','0')});

// Projects database------------------------------ :)
function project(type, title, description, year, images, folderD){
  this.type = type;
  this.title = title;
  this.description = description;
  this.year = year;
  this.images = images;
  this.folderD = folderD;
};


var project1 = new project()
    project1.name = "project1";
    project1.type = "P";
    project1.title = "THE O";
    project1.description = "";
    project1.year = "2014-2015";
    project1.images = ["./projects/01/01.jpg","./projects/01/02.jpg","./projects/01/03.jpg","./projects/01/04.jpg"];
    project1.folderD = "./projects/01";

var project2 = new project()
    project2.name = "project2";
    project2.type = "P";
    project2.title = "Title project 2";
    project2.description = "";
    project2.year = "2014-2015";
    project2.images = ["./projects/02/01.jpg","./projects/02/02.jpg","./projects/02/03.jpg","./projects/02/04.jpg"];
    project2.folderD = "./projects/02";

var project3 = new project()
    project3.name = "project3";
    project3.type = "UX";
    project3.title = "Title Project 3";
    project2.description = "";
    project3.year = "2014-2015";
    project3.images = ["./projects/03/01.jpg","./projects/03/02.jpg","./projects/03/03.jpg","./projects/03/04.jpg"];
    project3.folderD = "./projects/03";

var project4 = new project()
    project4.name = "project4";
    project4.type = "UX";
    project4.title = "Title Project 4";
    project4.description = "";
    project4.year = "2014-2015";
    project4.images = ["./projects/04/01.jpg","./projects/04/02.jpg","./projects/04/03.jpg","./projects/04/04.jpg"];
    project4.folderD = "./projects/04";

var project5 = new project()
    project5.name = "project5";
    project5.type = "UX";
    project5.title = "Title Project 4";
    project5.description = "";
    project5.year = "2014-2015";
    project5.images = ["./projects/05/01.jpg","./projects/05/02.jpg","./projects/05/03.jpg","./projects/05/04.jpg"];
    project5.folderD = "./projects/05";

var project6 = new project()
    project6.name = "project6";
    project6.type = "UX";
    project6.title = "Title Project 4";
    project6.description = "";
    project6.year = "2014-2015";
    project6.images = ["./projects/06/01.jpg","./projects/06/02.jpg","./projects/06/03.jpg","./projects/06/04.jpg"];
    project6.folderD = "./projects/06";

var project7 = new project()
    project7.name = "project7";
    project7.type = "UX";
    project7.title = "Title Project 4";
    project7.description = "";
    project7.year = "2014-2015";
    project7.images = ["./projects/07/01.jpg","./projects/07/02.jpg","./projects/07/03.jpg","./projects/07/04.jpg"];
    project7.folderD = "./projects/07";

var project8 = new project()
    project8.name = "project8";
    project8.type = "UX";
    project8.title = "Title Project 4";
    project8.description = "";
    project8.year = "2014-2015";
    project8.images = ["./projects/08/01.jpg","./projects/08/02.jpg","./projects/08/03.jpg","./projects/08/04.jpg"];
    project8.folderD = "./projects/08";

var project9 = new project()
    project9.name = "project9";
    project9.type = "UX";
    project9.title = "Title Project 4";
    project9.description = "";
    project9.year = "2014-2015";
    project9.images = ["./projects/09/01.jpg","./projects/09/02.jpg","./projects/09/03.jpg","./projects/09/04.jpg"];
    project9.folderD = "./projects/09";

    // The first three will be appended as sample.
    var allProjects = [project1, project2, project3, project4, project5, project6, project7, project8, project9];

    // Generate the array to load the pages and append them
    for (var i = 1; i < 10; i++) {
      var pages = [];
      pages[i] = "https://agustincastineira.com/projects/project"+i+".html"
      $.get(pages[i], function(content) {
          $('#PDescriptions').append(content);
      });
    };

    // Fill in all description variables and appended content if ready.
    var readytofill = 0;
    var check = function(){
      if( readytofill === 1){
          project1.description = $('html').find($('.project1-container')).html();
          project2.description = $('html').find($('.project2-container')).html();
          project3.description = $('html').find($('.project3-container')).html();
          project4.description = $('html').find($('.project4-container')).html();
          project5.description = $('html').find($('.project5-container')).html();
          project6.description = $('html').find($('.project6-container')).html();
          project7.description = $('html').find($('.project7-container')).html();
          project8.description = $('html').find($('.project8-container')).html();
          project9.description = $('html').find($('.project9-container')).html();

          // include 3 first projects
          for (var j = 0; j < 3; j++) {
            $('#AllCardsHolder').append('<div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0" id="home-card"><div class="cardHolder" projectName="'+allProjects[j].name+'"><div class="card" id="'+ allProjects[j].type +'"><div class="cardBG"></div><img src="'+ allProjects[j].folderD +'/thumbnail.jpg" class="img-responsive card-picture" alt=""><div class="cardContent"><h3 class="card-title">'+ allProjects[j].title +'</h3><p class="card-description">'+ allProjects[j].description +'</p><p class="link-mobile"><b>see more ></b></p></div></div><div class="card-candy"><h3></h3></div></div></div>');
          };
          $('#AllCardsHolder').addClass('yesShow');
      }else if (($('.project1-container').length !== 0) && ($('.project2-container').length !== 0) && ($('.project3-container').length !== 0) &&
          ($('.project4-container').length !== 0) && ($('.project5-container').length !== 0) && ($('.project6-container').length !== 0) &&
          ($('.project7-container').length !== 0) && ($('.project8-container').length !== 0) && ($('.project9-container').length !== 0)) {
            readytofill = 1;
            console.log("Content ready!");
            check();
      }else{
        console.log("Checking if content is ready...");
        setTimeout(check, 1000); // check again in a second
      }
    }
    check();

    // preload thumblails
    // if (document.images) {
    //
    //    img_0 = new Image();
    // 	 img_1 = new Image();
    //
    //    img_0.src = "./img/s1/orange.png";
    //    img_1.src = "./img/s1/Agus.jpg";
    //
    // }


    // click on candys
    var worktop = $('html').find($('#work')).offset().top;

    $('.candy').click(function(){

      $('#AllCardsHolder').removeClass('yesShow');
      $('#AllCardsHolder').empty();

      // Load projects cards that match the clicked candy.
      for (var i = 0; i < allProjects.length; i++) {
       if ($(this).attr("id") === allProjects[i].type) {
         $('#AllCardsHolder').append('<div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0" id="home-card"><div class="cardHolder" projectName="'+allProjects[i].name+'"><div class="card" id="'+ allProjects[i].type +'"><div class="cardBG"></div><img src="'+ allProjects[i].folderD +'/thumbnail.jpg" class="img-responsive card-picture" alt=""><div class="cardContent"><h3 class="card-title">'+ allProjects[i].title +'</h3><p class="card-description">'+ allProjects[i].description +'</p><p class="link-mobile"><b>see more ></b></p></div></div><div class="card-candy"><h3></h3></div></div></div>');
       }else if ($(this).attr("id") === "A") {
         $('#AllCardsHolder').append('<div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0" id="home-card"><div class="cardHolder" projectName="'+allProjects[i].name+'"><div class="card" id="'+ allProjects[i].type +'"><div class="cardBG"></div><img src="'+ allProjects[i].folderD +'/thumbnail.jpg" class="img-responsive card-picture" alt=""><div class="cardContent"><h3 class="card-title">'+ allProjects[i].title +'</h3><p class="card-description">'+ allProjects[i].description +'</p><p class="link-mobile"><b>see more ></b></p></div></div><div class="card-candy"><h3></h3></div></div></div>');
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
       $('#modal-container .modal-footer').append('<div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0 " id="modal-card"><div class="cardHolder" projectName="'+allProjects[i].name+'"><div class="card" id="'+ allProjects[i].type +'"><div class="cardBG"></div><img src="'+ allProjects[i].folderD +'/thumbnail.jpg" class="img-responsive card-picture" alt=""><div class="cardContent"><h3 class="card-title">'+ allProjects[i].title +'</h3><p class="card-description">'+ allProjects[i].description +'</p><p class="link-mobile"><b>see more ></b></p></div></div><div class="card-candy"><h3></h3></div></div></div>');
       counter = counter + 1;
     }
   }
  }

  //function for including the content in the modal
  function fillProjectModal(theprojectname){
    $('#modal-container .modal-header h2, #modal-container .modal-body p, #modal-container .modal-body .projectPictures, #modal-container .modal-footer').empty();
    $('#modal-container .modal-header h2').append(theprojectname.title);
    $('#modal-container .modal-body p').append(theprojectname.description);

    //include images
    for (var i = 0; i < theprojectname.images.length; i++) {
      $('#modal-container .modal-body .projectPictures').append('<img src="'+ theprojectname.images[i] +'" class="img-responsive" alt="">')
    }

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
    }else if(($(this).parent().attr('id') === "home-card") && ($(window).width() < 768)){
      console.log("home-card | mobile");
      fillProjectModal(projectName);
      $('.cardHolder').addClass("hover");
    }else if(($(this).parent().attr('id') === "modal-card") && ($(window).width() > 768)){
        console.log("modal-card | desktop");
        fillProjectModal(projectName);
    }else if(($(this).parent().attr('id') === "modal-card") && ($(window).width() < 768)){
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

});
