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
    project1.type = "UX";
    project1.title = "Title Project 1";
    project1.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus euismod massa nec pulvinar. Morbi varius aliquet nibh quis vehicula. Mauris est nunc, tincidunt eu erat vel, dictum consectetur nisi. Vestibulum aliquam ipsum et efficitur  lobortis. Vivamus ac lacus et libero sagittis viverra. Phasellus ut elit euismod, egestas orci non,  blandit nisl. Integer quis venenatis ligula. Nulla tincidunt pellentesque ullamcorper. Vivamus faucibus ex  rhoncus accumsan. Integer maximus ornare tristique. Etiam finibus mauris ipsum, quis vestibulum purus facilisis vel.  Integer luctus orci in vehicula lobortis. Donec pharetra ultricies nunc eu convallis. Nam vitae consectetur tortor,  id molestie risus. Ut aliquet nisl ligula, vel gravida metus molestie sed. Maecenas diam libero, pulvinar vel rutrum id, consequat at velit."
    project1.year = "2014-2015";
    project1.images = ["./projects/01/01.jpg","./projects/01/02.jpg","./projects/01/03.jpg","./projects/01/04.jpg"];
    project1.folderD = "./projects/01";

var project2 = new project()
    project2.name = "project2";
    project2.type = "UX";
    project2.title = "Title Project 2";
    project2.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus euismod massa nec pulvinar. Morbi varius aliquet nibh quis vehicula. Mauris est nunc, tincidunt eu erat vel, dictum consectetur nisi. Vestibulum aliquam ipsum et efficitur  lobortis. Vivamus ac lacus et libero sagittis viverra. Phasellus ut elit euismod, egestas orci non,  blandit nisl. Integer quis venenatis ligula. Nulla tincidunt pellentesque ullamcorper. Vivamus faucibus ex  rhoncus accumsan. Integer maximus ornare tristique. Etiam finibus mauris ipsum, quis vestibulum purus facilisis vel.  Integer luctus orci in vehicula lobortis. Donec pharetra ultricies nunc eu convallis. Nam vitae consectetur tortor,  id molestie risus. Ut aliquet nisl ligula, vel gravida metus molestie sed. Maecenas diam libero, pulvinar vel rutrum id, consequat at velit."
    project2.year = "2014-2015";
    project2.images = ["./projects/02/01.jpg","./projects/02/02.jpg","./projects/02/03.jpg","./projects/02/04.jpg"];
    project2.folderD = "./projects/02";

var project3 = new project()
    project3.name = "project3";
    project3.type = "UX";
    project3.title = "Title Project 3";
    project3.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus euismod massa nec pulvinar. Morbi varius aliquet nibh quis vehicula. Mauris est nunc, tincidunt eu erat vel, dictum consectetur nisi. Vestibulum aliquam ipsum et efficitur  lobortis. Vivamus ac lacus et libero sagittis viverra. Phasellus ut elit euismod, egestas orci non,  blandit nisl. Integer quis venenatis ligula. Nulla tincidunt pellentesque ullamcorper. Vivamus faucibus ex  rhoncus accumsan. Integer maximus ornare tristique. Etiam finibus mauris ipsum, quis vestibulum purus facilisis vel.  Integer luctus orci in vehicula lobortis. Donec pharetra ultricies nunc eu convallis. Nam vitae consectetur tortor,  id molestie risus. Ut aliquet nisl ligula, vel gravida metus molestie sed. Maecenas diam libero, pulvinar vel rutrum id, consequat at velit."
    project3.year = "2014-2015";
    project3.images = ["./projects/03/01.jpg","./projects/03/02.jpg","./projects/03/03.jpg","./projects/03/04.jpg"];
    project3.folderD = "./projects/03";

var project4 = new project()
    project4.name = "project4";
    project4.type = "UX";
    project4.title = "Title Project 4";
    project4.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus euismod massa nec pulvinar. Morbi varius aliquet nibh quis vehicula. Mauris est nunc, tincidunt eu erat vel, dictum consectetur nisi. Vestibulum aliquam ipsum et efficitur  lobortis. Vivamus ac lacus et libero sagittis viverra. Phasellus ut elit euismod, egestas orci non,  blandit nisl. Integer quis venenatis ligula. Nulla tincidunt pellentesque ullamcorper. Vivamus faucibus ex  rhoncus accumsan. Integer maximus ornare tristique. Etiam finibus mauris ipsum, quis vestibulum purus facilisis vel.  Integer luctus orci in vehicula lobortis. Donec pharetra ultricies nunc eu convallis. Nam vitae consectetur tortor,  id molestie risus. Ut aliquet nisl ligula, vel gravida metus molestie sed. Maecenas diam libero, pulvinar vel rutrum id, consequat at velit."
    project4.year = "2014-2015";
    project4.images = ["./projects/04/01.jpg","./projects/04/02.jpg","./projects/04/03.jpg","./projects/04/04.jpg"];
    project4.folderD = "./projects/04";

    var allProjects = [project1, project3, project2, project3, project4, project4, project3, project4, project4];


    // include 3 first projects
    for (var i = 0; i < 3; i++) {
      $('#AllCardsHolder').append('<div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0" id="home-card"><div class="cardHolder" projectName="'+allProjects[i].name+'"><div class="card" id="'+ allProjects[i].type +'"><div class="cardBG"></div><img src="'+ allProjects[i].folderD +'/thumbnail.jpg" class="img-responsive card-picture" alt=""><div class="cardContent"><h3 class="card-title">'+ allProjects[i].title +'</h3><p class="card-description">'+ allProjects[i].description +'</p><p class="link-mobile"><b>see more ></b></p></div></div><div class="card-candy"><h3></h3></div></div></div>');
    };
    $('#AllCardsHolder').addClass('yesShow');


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
