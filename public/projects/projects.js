
var number_of_projects = 17;

function project(type, title, description, year, images, folderD){
  this.type = type;
  this.title = title;
  this.description = description;
  this.year = year;
  this.images = images;
  this.folderD = folderD;
};

// Projects database------------------------------ :)

var project1 = new project()
    project1.name = "project1";
    project1.type = "P";
    project1.title = "THE O";
    project1.description = "";
    project1.year = "2014-2015";
    project1.images = ["./projects/1/01.jpg","./projects/1/02.jpg","./projects/1/03.jpg","./projects/1/04.jpg"];
    project1.folderD = "./projects/1";

var project2 = new project()
    project2.name = "project2";
    project2.type = "P";
    project2.title = "The Focused Toilet";
    project2.description = "";
    project2.year = "2014-2015";
    project2.images = ["./projects/2/01.jpg"];
    project2.folderD = "./projects/2";

var project3 = new project()
    project3.name = "project3";
    project3.type = "P";
    project3.title = "TREC Fuel";
    project2.description = "";
    project3.year = "2014-2015";
    project3.images = ["./projects/3/01.jpg","./projects/3/02.jpg"];
    project3.folderD = "./projects/3";

var project4 = new project()
    project4.name = "project4";
    project4.type = "P";
    project4.title = "Life Calendar";
    project4.description = "";
    project4.year = "2014-2015";
    project4.images = ["./img/poster.jpg","./projects/4/01.jpg"];
    project4.folderD = "./projects/4";

var project5 = new project()
    project5.name = "project5";
    project5.type = "UX";
    project5.title = "THE O App";
    project5.description = "";
    project5.year = "2014-2015";
    project5.images = ["./projects/5/01.jpg","./projects/5/02.gif","./projects/5/03.jpg","./projects/5/04.jpg"];
    project5.folderD = "./projects/5";

var project6 = new project()
    project6.name = "project6";
    project6.type = "UX";
    project6.title = "Email Design & Dev";
    project6.description = "";
    project6.year = "2014-2015";
    project6.images = ["./projects/6/01.jpg","./projects/6/02.jpg","./projects/6/03.jpg","./projects/6/04.jpg"];
    project6.folderD = "./projects/6";

var project7 = new project()
    project7.name = "project7";
    project7.type = "UX";
    project7.title = "FindTech UI";
    project7.description = "";
    project7.year = "2014-2015";
    project7.images = ["./projects/7/01.jpg"];
    project7.folderD = "./projects/7";

var project8 = new project()
    project8.name = "project8";
    project8.type = "FE";
    project8.title = "My Website";
    project8.description = "";
    project8.year = "2014-2015";
    project8.images = ["./projects/8/01.jpg","./projects/8/02.jpg"];
    project8.folderD = "./projects/8";

var project9 = new project()
    project9.name = "project9";
    project9.type = "FE";
    project9.title = "TREC Fuel Frontend";
    project9.description = "";
    project9.year = "2014-2015";
    project9.images = ["./projects/9/01.jpg","./projects/9/02.gif"];
    project9.folderD = "./projects/9";

var project10 = new project()
    project10.name = "project10";
    project10.type = "FE";
    project10.title = "Landing Page Design";
    project10.description = "";
    project10.year = "2014-2015";
    project10.images = ["./projects/10/01.jpg"];
    project10.folderD = "./projects/10";

  var project11 = new project()
    project11.name = "project11";
    project11.type = "UX";
    project11.title = "Heatmaps & User recording";
    project11.description = "";
    project11.year = "2014-2015";
    project11.images = ["./projects/11/01.jpg"];
    project11.folderD = "./projects/11";

var project12 = new project()
    project12.name = "project12";
    project12.type = "G";
    project12.title = "EAROS Kickstarter Campaign";
    project12.description = "";
    project12.year = "2014-2015";
    project12.images = ["./projects/12/01.jpg"];
    project12.folderD = "./projects/12";

var project13 = new project()
    project13.name = "project13";
    project13.type = "G";
    project13.title = "Website Design";
    project13.description = "";
    project13.year = "2014-2015";
    project13.images = ["./projects/13/01.jpg","./projects/13/02.jpg","./projects/13/03.jpg"];
    project13.folderD = "./projects/13";

var project14 = new project()
    project14.name = "project14";
    project14.type = "G";
    project14.title = "Login Interface Design";
    project14.description = "";
    project14.year = "2014-2015";
    project14.images = ["./projects/14/01.jpg","./projects/14/02.jpg","./projects/14/03.jpg"];
    project14.folderD = "./projects/14";

var project15 = new project()
    project15.name = "project15";
    project15.type = "G";
    project15.title = "Woohoo Kickstarter Campaign";
    project15.description = "";
    project15.year = "2014-2015";
    project15.images = ["./projects/15/01.jpg"];
    project15.folderD = "./projects/15";

var project16 = new project()
    project16.name = "project16";
    project16.type = "G";
    project16.title = "Juiced Kickstarter Campaign";
    project16.description = "";
    project16.year = "2014-2015";
    project16.images = ["./projects/16/01.jpg"];
    project16.folderD = "./projects/16";

var project17 = new project()
    project17.name = "project17";
    project17.type = "FE";
    project17.title = "Web Design - Funeral Homes";
    project17.description = "";
    project17.year = "2014-2015";
    project17.images = ["./projects/16/01.jpg"];
    project17.folderD = "./projects/17";

    // Create the array of all projects
    var allProjects = [];
    for (var j = 0; j < number_of_projects; j++) {
      var myvariable = 'project'+ String(j+1);
      // console.log(myvariable);
      allProjects[j] = eval(myvariable);
    }

    // Generate the array to load the pages and append them
    for (var i = 1; i < number_of_projects + 1; i++) {
      var pages = [];
      pages[i] = "https://agustincastineira.com/projects/project"+i+".html"
      $.get(pages[i], function(content) {
          $('#PDescriptions').append(content);
      });
    };

    // preload images function
    function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        (new Image()).src = this;
        });
    }

    // preload thumbnails for the cards
    for (var i = 1; i < number_of_projects+1; i++) {
      preload(['./projects/'+i+'/thumbnail.jpg']);
    }

    // Fill in all description variables and appended content if ready.
    var readytofill = 0;

    function check(){

      if( readytofill === 1){

        // Include all the descriptions
        for (var i = 0; i < number_of_projects; i++) {
          allProjects[i].description = $('html').find($('.'+allProjects[i].name+'-container')).html();
        }

        //create an array of 3 not repeated random numbers between 1 and "number_of_projects"
        var arr = []
        while(arr.length < 9){
            var randomnumber = Math.floor(Math.random() * number_of_projects) + 0;
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }

        // include 3 random projects on mobile and 9 on desktop
        var n_projects_added = 9;
        if ($(window).width() < 769) {
         var n_projects_added = 3;
       }else if ($(window).width() < 991) {
         var n_projects_added = 9;
       }
        for (var j = 0; j < n_projects_added; j++) {
          var k = arr[j];
          $('#AllCardsHolder').append('<div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0" id="home-card"><div class="cardHolder" projectName="'+allProjects[k].name+'"><div class="card" id="'+ allProjects[k].type +'"><div class="cardBG"></div><img src="'+ allProjects[k].folderD +'/thumbnail.jpg" class="img-responsive card-picture" alt=""><p class="link-mobile"><b>see more ></b></p><div class="cardContent"><h3 class="card-title">'+ allProjects[k].title +'</h3><p class="card-description">'+ allProjects[k].description +'</p></div></div><div class="card-candy"><h3></h3></div></div></div>');
        };
          $('#AllCardsHolder').addClass('yesShow');

      }else if (
          ($('html').find($('.project1-container')).length !== 0) && ($('html').find($('.project2-container')).length !== 0) && ($('html').find($('.project3-container')).length !== 0) &&
          ($('html').find($('.project4-container')).length !== 0) && ($('html').find($('.project5-container')).length !== 0) && ($('html').find($('.project6-container')).length !== 0) &&
          ($('html').find($('.project7-container')).length !== 0) && ($('html').find($('.project8-container')).length !== 0) && ($('html').find($('.project9-container')).length !== 0) &&
          ($('html').find($('.project10-container')).length !== 0) && ($('html').find($('.project11-container')).length !== 0) && ($('html').find($('.project12-container')).length !== 0) &&
          ($('html').find($('.project13-container')).length !== 0) && ($('html').find($('.project14-container')).length !== 0) && ($('html').find($('.project15-container')).length !== 0) &&
          ($('html').find($('.project16-container')).length !== 0)&& ($('html').find($('.project17-container')).length !== 0)){
            readytofill = 1;
            console.log("Content ready!");
            check();
      }else{
        console.log("Checking if content is ready...");

        setTimeout(check, 150); // check again in a second
      }

    }

    check();

    setTimeout(function(){
      // Preload:

      preload([
          './projects/12/01.jpg',
          './projects/11/01.jpg',
          './projects/10/01.jpg',
          './projects/9/01.jpg',
          './projects/9/02.gif',
          './projects/8/01.jpg',
          './projects/8/02.jpg',
          './projects/7/01.jpg',
          './projects/6/01.jpg',
          './projects/6/02.jpg',
          './projects/6/03.jpg',
          './projects/6/04.jpg',
          './projects/5/01.jpg',
          './projects/5/02.gif',
          './projects/5/03.jpg',
          './projects/5/04.jpg',
          './img/poster.jpg',
          './projects/4/01.jpg',
          './projects/3/01.jpg',
          './projects/3/02.jpg',
          './projects/2/01.jpg',
          './projects/1/01.jpg',
          './projects/1/02.jpg',
          './projects/1/03.jpg',
          './projects/1/04.jpg',
          './projects/13/01.jpg',
          './projects/13/02.jpg',
          './projects/13/03.jpg',
          './projects/14/01.jpg',
          './projects/14/02.jpg',
          './projects/14/03.jpg',
          './projects/15/01.jpg',
          './projects/16/01.jpg',
          './projects/17/01.jpg'

      ]);

    },2000);
