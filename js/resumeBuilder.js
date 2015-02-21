
var bio = 	{
				"name":"Frank Chang",
				"role":"Front End Web Developer",
				"contacts": {
					"mobile":"646-298-6095",
					"email":"realflchang@gmail.com",
					"github":"realflchang",
					"location":"Bayside, NY"
				},
				"welcomeMessage":"Experienced Web Developer, E-Commerce Site Manager",
				"skills": ["HTML/CSS","jQuery","Perl","PHP","Photoshop","MySQL"],
				"biopic":"images/frankchang.jpg"
			};

var education = {
			"schools": [
							{
								"name":"SUNY - Stony Brook",
								"location":"Stony Brook, NY",
								"degree":"B.S.",
								"majors":["Computer Science"],
								"dates":"1999",
								"url":"http://www.stonybrook.edu/"
							}
						],
		"onlineCourses":[
							{
								"title":"Git and GitHub",
								"school":"Udacity",
								"date":"2015",
								"url":"https://www.udacity.com/course/ud775"
							},
							{
								"title":"Javascript",
								"school":"Udacity",
								"date":"2015",
								"url":"https://www.udacity.com/course/ud804"
							},
							{
								"title":"jQuery",
								"school":"Udacity",
								"date":"2015",
								"url":"https://www.udacity.com/course/ud245"
							}

						]
				};

var work = {
				"jobs": [
						{
							"employer":"HerbalDietShop.com - Self Employed",
							"title":"Web Developer/Manager (Self Employed)",
							"location":"New York, NY",
							"dates":"Mar 2012 - Present",
							"description":"Manage all aspects of e-commerce website, from front-end & back-end development, order processing and support, client customer support, and email newsletter marketing.",
							"url": "http://www.herbaldietshop.com",
							"address":"New York, NY"
						},
						{
							"employer":"Kenyon and Kenyon, LLP",
							"title":"Practice Support Analyst",
							"location":"New York, NY",
							"dates":"Aug 2009 - Mar 2012",
							"description": "Prepared e-discovery documents for processing and production for attorney review. Used LAW, iPro, Summation, Livenote and other various tools dtSearch.",
							"url":"http://www.kenyon.com",
							"address":"One Broadway New York, NY 10004"
						},
						{
							"employer":"Flemming, Zulack, LLP",
							"title":"Litigation Support Assistant",
							"location":"New York, NY",
							"dates":"Jan 2009 - Aug 2009",
							"description": "Setup and maintained litigation databases with Concordance and Summation to allow attorney review and productions from electronic platforms.",
							"url":"http://www.fzwz.com",
							"address":"One Liberty Plaza, New York, NY 10006"
						},
						{
							"employer":"Hughes, Hubbard and Reed, LLP",
							"title":"Litigation Support Data Analyst",
							"location":"New York, NY",
							"dates":"Feb 2007 - Jan 2009",
							"description": "Setup and managed litigation databases with Concordance, Summation, and LiveNote for attorney review and productions.",
							"url":"http://www.hugheshubbard.com",
							"address":"One Battery Park Plaza New York, New York 10004"
						},
						{
							"employer":"Skadden, Arps, LLP",
							"title":"Senior Technical Specialist / Legal Technology",
							"location":"New York, NY",
							"dates":"Feb 2004 - Feb 2007",
							"description": "Manipulation and conversion of data for import to Concordance and DocuMatrix electronic databases for attorney review and productions. Created Perl scripts for data handling and integrity management. Worked with project managers and team members to plan data management options",
							"url":"http://www.skadden.com",
							"address":"4 Times Sq, New York, NY 10036"
						},
						{
							"employer":"Edelman Public Relations Worldwide",
							"title":"Web Programmer",
							"location":"New York, NY",
							"dates":"Apr 2000 - Feb 2004",
							"description": "Programmed web pages for clients using HTML, CSS, Javascript.",
							"url":"http://www.edelman.com",
							"address":"250 Hudson Street, New York, NY 10013"
						}
					]
				};

var projects = {
			"projects": [
							{
								"title": "HerbalDietShop.com E-Commerce Retail Website",
								"dates": "2005 - Present",
								"description": "Built fully functional retail site online to handle customer orders, update customers on tracking information, provide customer support, update catalog, send email newsletters, perform online marketing. Technical skills utilized include HTML5/CSS3, jQuery and JS, Bootstrap, PHP/MySQL, cPanel, Photoshop, Git.",
								"images": ["images/hds-2.jpg","images/hds-1.jpg"],
								"url": "http://www.herbaldietshop.com"
							}
			]
};

/* Bio and Skills section */
bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%',bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%',bio.role);

	//var formattedContactGeneric = HTMLcontactGeneric.replace('%data%',bio.contactinfo);
	var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
	//var formattedTwitter = HTMLtwitter.replace('%data%',bio.twitter);
	var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
	//var formattedBlog = HTMLblog.replace('%data%',bio.blog);
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);

	var formattedBioPic = HTMLbioPic.replace('%data%',bio.biopic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills) {
		$("#header").append(HTMLskillsStart);

		var formattedskills = "";
		var tempskills = "";
		for (var i=0; i<bio.skills.length; i++) {
			tempskills = HTMLskills;
			formattedskills += tempskills.replace('%data%',bio.skills[i]);
		}
		$("#skills").append(formattedskills);
	}

}

/* Education Section */
education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (schoolnum in education.schools) {
		var formattedSchoolName = HTMLschoolName.replace('%data%',education.schools[schoolnum].name) + HTMLschoolDegree.replace('%data%',education.schools[0].degree) + HTMLschoolMajor.replace('%data%',education.schools[0].majors);
		formattedSchoolName = formattedSchoolName.replace('#',education.schools[schoolnum].url);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(HTMLschoolLocation.replace('%data%',education.schools[schoolnum].location));
		$(".education-entry:last").append(HTMLschoolDates.replace('%data%',education.schools[schoolnum].dates));
	}

	if (education.onlineCourses.length > 0) {
		$(".education-entry").append(HTMLonlineClasses);
		$(".education-entry").find("h3").css("padding-left","0"); // Fix extra padding in CSS for "Online Classes"

		for (var course in education.onlineCourses) {
			var formattedOnlineCourseName = HTMLonlineTitle.replace('%data%',education.onlineCourses[course].title) + HTMLonlineSchool.replace('%data%',education.onlineCourses[course].school) + HTMLonlineURL.replace('%data%',education.onlineCourses[course].url);
			formattedOnlineCourseName = formattedOnlineCourseName.replace(/#/g,education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineCourseName);
			$(".education-entry:last").append(HTMLonlineDates.replace('%data%',education.onlineCourses[course].date));
		}
	}

	// Slight CSS adjustments
	$(".education-entry").find("a").css("display","inline");
	$(".education-entry").find("h3").nextAll(".date-text").css("float","none");
}

/* Work Section */
work.display = function() {

	for (jobnum in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedemployer = HTMLworkEmployer.replace('%data%',work.jobs[jobnum].employer);
		formattedemployer = formattedemployer.replace('#',work.jobs[jobnum].url);
		var formattedtitle = HTMLworkTitle.replace('%data%',work.jobs[jobnum].title);
		var formattedworklocation = HTMLworkLocation.replace('%data%',work.jobs[jobnum].location);
		var formatteddates = HTMLworkDates.replace('%data%',work.jobs[jobnum].dates);
		var formatteddescription = HTMLworkDescription.replace('%data%',work.jobs[jobnum].description);


		$(".work-entry:last").append(formattedemployer+formattedtitle+formattedworklocation+formatteddates+formatteddescription);
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		formattedTitle = formattedTitle.replace('#', projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = '<a href="http://www.herbaldietshop.com" target="hds">'+HTMLprojectImage.replace('%data%', projects.projects[project].images[image]) + '</a>';
				$(".project-entry:last").append(formattedImage);
			}

		}
		$("#projects").find("img").css("width","300px");
		$("#projects").find("img").parent("a").css("display","inline");
	}

}

function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        locationArray.push(work_obj.jobs[job].location);
    }
    return locationArray;
}


function inName() {
	var str_name = $("h1#name").text(); // Grab name from Bio section
	str_name = str_name.trim();
	var nameArray = str_name.split(" ");
	for (var i=0; i<nameArray.length-1; i++) {
		nameArray[i] = nameArray[i][0].toUpperCase() + nameArray[i].slice(1).toLowerCase();
	}
	nameArray[nameArray.length-1] = nameArray[nameArray.length-1].toUpperCase();
	return nameArray.join(" ");
}

// Function to help get elevation data when user clicks anywhere in map but pinpoint markers. Location from mouse cursor event (object).
  function getElevationFromListener(event) {
    var locations = [];

    // Retrieve the clicked location and push it on the array
    var clickedLocation = event.latLng;
    locations.push(clickedLocation);

    // call getElevation function to continue processing location, so as to not rewrite function code
    getElevation(locations);
  }

// Function to help get elevation data when user clicks any of the pinpoint markers. Location from string.
    function getElevation(locations) {

    // Create a LocationElevationRequest object using the array's one value
    var positionalRequest = {
      'locations': locations
    }

    // Initiate the location request
    elevator.getElevationForLocations(positionalRequest, function(results, status) {
      if (status == google.maps.ElevationStatus.OK) {

        // Retrieve the first result
        if (results[0]) {

          // Output elevation data in console log
          console.log("The elevation at this point is " + results[0].elevation + " meters.");
          var currelevation = "The elevation at this point is " + results[0].elevation + " meters.";

          // Indicate elevation in infoWindow for pinpoint marker. Ignored if other than pinpoint marker since Div does not exist
          $("div#elevation"+numbersonly(locations[0].lat())+numbersonly(locations[0].lng())).text(currelevation);
          } else {
          alert("No elevation results found");
        }
      } else {
        alert("Elevation service failed due to: " + status);
      }
    });
  }

// Function to strip string of all except numbers. Used for setting Elevation Div IDs by Lat/Lon so calculated elevation data can appear in proper infoWindow.
function numbersonly(str) {
  str = str + "";
  str = str.replace(/[\-\.]/g,'');
  return str;
}


// Add locations collected from JSON to Directions Menu
function addLocationsForDirections(locations) {

	var uniquelocations = [];

	// Iterates through the array of locations, adds to destination
	for (var place in locations) {
	  if ($.inArray(locations[place], uniquelocations) <0) {
	    // add place to uniquelocations
	    uniquelocations.push(locations[place]);
	    $("select#start").append("<option value=\""+locations[place]+"\">"+locations[place]+"</option>")
	    $("select#end").append("<option value=\""+locations[place]+"\">"+locations[place]+"</option>")
	  }
	}

}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var selectedMode = document.getElementById('travelmode').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode[selectedMode],
      provideRouteAlternatives: true
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
  $("#directions-panel").css("border","1px solid #999");
}


bio.display();
work.display();
education.display();
projects.display();

$("#main").append(internationalizeButton);

// you want to see a map? here's a map.
$("#mapDiv").append(googleMap);

$("#mapDiv").after('<div id="directions-panel"></div>');


