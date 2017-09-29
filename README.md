# FriendFinder

In this application the User can answer few questions and find a compatible friend who has similar thought processes. This project is a full stack Node.js application deployed to Heroku, and anyone who has the heroku project link can access from different locations. 

The package has the following files - server.js, package.json, app/data/friends.js, app/public/home.html, app/public/survey.html, app/routing/apiRoutes.js, app/routing/htmlRoutes.js, gitignore (to ignore node_modules folder from uploading to git repo). 

* The server.js file has the code for loading npm modules, which port to use, body-parser, listener, and the required routing. 
* The app/data/friends.js holds the objects array where I store all the friends' details. 
* The app/public/home.html has code to display the home page which has bootstrap jumbotron header, glyphicons, a button to go to survey page, and links to list all friends' details in json format and link to git repository.
* The app/public/survey.html has the code to display the survey page with fields name, link to photo, and 10 dropdown questions for the user to choose to find the best match, and a submit button. Also has link to Clear All which clears the user input to start fresh, another link to list all friends' details in json format, and another to git repository. And a modal to display the result (best match). I have used css, and js bootstrap components to format the page and components. Also I have added the Front-end Javascript code to handle the submit and clear all events.
  * The clear all event will reload the page which clears the input to start fresh.
  * The submit event first validates the input whether all fields are entered. If any field is missing data it'll display an alert asking the user to enter all fields; else it'll do a POST request to the express server sending the current URL and user entered data. Once the call is complete it'll display a Modal with the best match person's name and photo (if the photo is not available it'll display a placeholder image).
* The app/routing/htmlRoutes.js holds the code to handle the api GET requests on /survey and * for anything else other than survey including /home, and displays the corresponding html page.
* The app/routing/apiRoutes.js handles the GET request to list all friends in json format, and the POST request to find the best match. When the POST request is hit, the code will get the scores array for the current user and compares with each of the friend's scores in the existing pool, finds the difference (difference in each answer score and adds them all together), and stores the total difference and the friends array index in a temporary array. Once all the friend's scores are compared the temporary array will be sorted by the difference, and this will give me the best match at the 0th index. Then the POST request will return the index of 0 which has the best match back to the client.

## Contributor:
* Vaiji Neelakandan
