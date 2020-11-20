# Project1
My JS project: building off of my original GO Tracker.<br>
GO Tracker is a place where Pokemon GO Trainers can log in and check their personal shiny rates. The entirety of GO Tracker is still a work-in-progress. The long-term goal for this project is for Trainers to be able to log in and track their perosnal shiny rates over time, per pokemon species.<br>
I've updated GO Tracker to include the beginnings of a Pokedex.<br>
<br>
<h2>How to view all of my features:</h2><br>
* Navigate to the Kanto page from the Regions tab. A fetch request to PokeAPI provides an array of all the pokemon names which is used to populate all of the sprites.<br>
* Clicking on any pokemon in this array will make anotehr fetch request and display select info for that pokemon's "beginner" Pokedex entry, along with the shiny version of that pokemon.<br>
* Heading over to the Sign Up tab, regex is used to ensure that a Trainer's phone number is displayed in the correct format.<br>
* Regex is also used to validate that a Trainer's password meets all of the password requirements.<br>
* The length of the user's password is analyzed and returned back if it has not met the length requirement.<br>  
<br>
<h2>Things to note:</h2><br>
There are no special requirements needed to run my project.<br>
The Sign Up page is not fully functional- for now it serves to show the use of regex.<br>
There is a slight delay upon loading each Pokedex entry, but it *does* work!<br>
My desktop-sized navigation bar displays best when using Chrome or Firefox.<br>
