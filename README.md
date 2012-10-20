NodeJS App Boilder
=================

This application bootstrap will helps you to build a complete backend system and let you focus on build your core application without distractions.

### Out of the box this application have

*	[node](http://nodejs.org/ "NodeJs")
	as the backend engine in javascript

*	[Express](http://expressjs.com/ "Express")
	as the midleware HTTP server

*	[Jade](http://jade-lang.com/ "Jade")
	as the temlate engine system

*	[Less](http://lesscss.org/ "Less")
	as the CSS pre procesor engine

*	[bootstrap](http://twitter.github.com/bootstrap/ "Twitter Bootstrap")
	as the main CSS framework

*	[fontawesome](http://fortawesome.github.com/Font-Awesome/ "Font-Awesome")
	as the vectorial icons library

***

## Installation

You need nodejs and npm in your system. In the command navigate to the directory where you download this files, run the "npm install" to install all the dependencies, the run "node app" to start the application.

I strongly recommend to use [nodemon](https://github.com/remy/nodemon "nodemon") to automatically restart the server when an application file change.

***

## Mapping

### Directory Tree

All the pages are maped from the /routes directory, so any sub-folder tree will be maped in the url.  
For example, if you have this file: /routes/contact/form.js you can acces to this page in the URL path /contact/form

### Index file

If a file is named index.js you don't have to write index to get the page, for example, if you have the file /routes/calendar/index.js you can access to this page in the URL path /calendar

### URL variables

If you want to make dynamic URLs, you should use variables.  
So for example if want to get the profile page of one account by its ID, you should want to create a URL path like this: /profile/:userId   
This :userId will be replaced with something like a number or a word that is your account ID. A real URL path finally be like /profile/012542 representing your account ID.  
To put variables in your path you need to name your file with an underscore ("_") before the variable name, the file will be named like: /routes/profile/_userId  
If you want to use more than one variable, like /photo/:userId/:photoId, the file will be named like: /routes/photo/_userId&amp;_photoId, the ampersand ("&amp;") will be replaced with an slash ("/").