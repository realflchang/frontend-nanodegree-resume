
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
				"skills": ["HTML/CSS","jQuery","PHP","Photoshop","MySQL"],
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
							"description":"Manage all aspects of e-commerce website, from front-end & back-end development, order processing and support, client customer support, and email newsletter marketing."
						},
						{
							"employer":"Kenyon and Kenyon, LLP",
							"title":"Practice Support Analyst",
							"location":"New York, NY",
							"dates":"Aug 2009 - Mar 2012",
							"description": "Prepared e-discovery documents for processing and production for attorney review. Used LAW, iPro, Summation, Livenote and other various tools dtSearch."
						},
						{
							"employer":"Flemming, Zulack, LLP",
							"title":"Litigation Support Assistant",
							"location":"New York, NY",
							"dates":"Jan 2009 - Aug 2009",
							"description": "Setup and maintained litigation databases with Concordance and Summation to allow attorney review and productions from electronic platforms."
						},
						{
							"employer":"Hughes, Hubbard and Reed, LLP",
							"title":"Litigation Support Data Analyst",
							"location":"New York, NY",
							"dates":"Feb 2007 - Jan 2009",
							"description": "Setup and managed litigation databases with Concordance, Summation, and LiveNote for attorney review and productions."
						},
						{
							"employer":"Skadden, Arps, LLP",
							"title":"Senior Technical Specialist / Legal Technology",
							"location":"New York, NY",
							"dates":"Feb 2004 - Feb 2007",
							"description": "Manipulation and conversion of data for import to Concordance and DocuMatrix electronic databases for attorney review and productions. Created Perl scripts for data handling and integrity management. Worked with project managers and team members to plan data management options"
						},
						{
							"employer":"Edelman Public Relations Worldwide",
							"title":"Web Programmer",
							"location":"New York, NY",
							"dates":"Apr 2000 - Feb 2004",
							"description": "Programmed web pages for clients using HTML, CSS, Javascript."
						}
					]
				};


var projects = {
			"projects": [
							{
								"title": "HerbalDietShop.com E-Commerce Retail Website",
								"dates": "2005 - Present",
								"description": "Built fully functional retail site online to handle customer orders, update customers on tracking information, provide customer support, update catalog, send email newsletters, perform online marketing.",
								"images": ["images/hds-2.jpg","images/hds-1.jpg"]
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

education.display = function() {
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLschoolName.replace('%data%',education.schools[0].name) + HTMLschoolDegree.replace('%data%',education.schools[0].degree));
	$(".education-entry:last").append(HTMLschoolDates.replace('%data%',education.schools[0].dates));
	$(".education-entry:last").append(HTMLschoolLocation.replace('%data%',education.schools[0].location));
	$(".education-entry:last").append(HTMLschoolMajor.replace('%data%',education.schools[0].majors));

	if (education.onlineCourses.length > 0) {
		$(".education-entry").append(HTMLonlineClasses);
		$(".education-entry").find("h3").css("padding-left","0"); // Fix extra padding in CSS for "Online Classes"

		for (var course in education.onlineCourses) {
			$(".education-entry:last").append(HTMLonlineTitle.replace('%data%',education.onlineCourses[course].title) + HTMLonlineSchool.replace('%data%',education.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineDates.replace('%data%',education.onlineCourses[course].date));
			$(".education-entry:last").append(HTMLonlineURL.replace('%data%',education.onlineCourses[course].url));
		}
	}
}

work.display = function() {
	//$("#main").append(work["title"]);

	for (jobnum in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedemployer = HTMLworkEmployer.replace('%data%',work.jobs[jobnum].employer);
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
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}

		}
		$("#projects").find("img").css("width","300px");
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


bio.display();
work.display();
education.display();
projects.display();

$("#main").append(internationalizeButton);

// you want to see a map? here's a map.
$("#mapDiv").append(googleMap);

