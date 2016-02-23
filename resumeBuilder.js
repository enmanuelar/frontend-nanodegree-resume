/*
This is empty on purpose! Your code to build the resume will go here.
 */


 /* 
    projects: array of objects with
          title: string 
          dates: string (works with a hyphen between them)
          description: string
          images: array with string urls
    display: function taking no parameters

*/


var bio = {name: "Fry",
		role: "Web developer",
		contacts:
		{
			phone: "555-5555",
			email: "fry@gmail.com",
			github: "@fryGit",
			twitter: "@fry01",
		},
		picture: "images/fry.jpg",
		skills: ["awesomenes", "programming"],
		welcome: "Hi, this is my welcome message"};

var work = {jobs:{employer: "boss", title:"Pizza deliver guy", location:"Narnia", dates:"1995 - 2005", description:"delivering pizza"}};

var education = {schools : {name: "Howards", location: "Narnia", degree: "Pizza delivery expert", dates: 1999, url: null},
				onlineCourses : {title: "intro to cs", school: "Udacity", date: 2015, url: "www.Udacity.com"}					
				};

var projects = {project1:["Project title", "1995 - 2005", "This is the project description",[undefined]]};



//bio
var bioPicture = HTMLbioPic.replace("%data%", bio.picture);
var skillsBio = HTMLskills.replace("%data%", bio.skills);
var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
var mobile = HTMLmobile.replace("%data%", bio.contacts.phone);
var email = HTMLemail.replace("%data%", bio.contacts.email);  
var github = HTMLgithub.replace("%data%", bio.contacts.github);
var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var contacts = HTMLcontactGeneric.replace("%data%", bio.contacts);
var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);

//work
var workTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
var workDates = HTMLworkDates.replace("%data%", work.jobs.date);
var workCity = HTMLworkLocation.replace("%data%", work.jobs.location);

//project
var projectDateStart = HTMLprojectStart.replace("%data%", projects.project1[1]);
var projectTitle = HTMLprojectTitle.replace("%data%", projects.project1[0]);
var projectDescription = HTMLprojectDescription.replace("%data%", projects.project1[2]);
var projectImage = HTMLprojectImage.replace("%data%", projects.project1[3]);

//education
var educationSchool = HTMLschoolName.replace("%data%", education.schools.name);
var educationDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
var educationDates = HTMLschoolDates.replace("%data%", education.schools.dates);
var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
var courseURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);

//Header
$("#header").append(name);
$("#header").append(role);
$("#header").append(welcomeMsg);
$("#header").append(skillsBio);
$("#header").append(bioPicture);

//Top Contacts
$("#topContacts").append(contacts);
$("#topContacts").append(phone);

//Projects
$("#projects").append(projects);

//Work Experience
$("#workExperience").append(workTitle);
$("#workExperience").append(workDates);
$("#mapDiv").append(workCity);


//Education
$("#education").append(educationSchool);
$("#education").append(educationDegree);
$("#education").append(educationDates);
$("#education").append(onlineTitle);
$("#education").append(courseURL);
