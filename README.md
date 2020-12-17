# AngularSpaProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2 and is for the Angular course in SoftUni.

## Getting started

The name of this single page application is vashiterecepti.bg (your recipes).
"Your recipes" (or in Bulgarian "Вашите рецепти") is a food-focused social network for cooks or just for people who loves cooking. Here everyone will play a part in helping cooks discover and share their recipes.

For now the only one language in the app is Bulgarian.

## Development server
To use this app you have to visit this link: https://your-recipes-spa.herokuapp.com/ or to download the repo and then to run this code from the downloaded app location:
"ng serve --open".

The app comunicate to a remote service via REST-api client-server. If the server, which is depoloyed on heroku, is not working, you can use this repository: https://github.com/viktorkombov/rest-api-for-angular-project

## Home page for guests

Initially, you will see the home page for guests.
Here you can read recipes, which are shared by another users and find them with the searching tool. If you want to have access to all contain of the application, you have to login. You can do this with the functionality for login and register.

# Logged in users

The application provides to users with the functionality to share recipes, to view recipe details page and to like recipes or to edit or delete these which are created by them.

This app has autentication, authorization, error handling and data validation for avoiding crashes when invalid data is entered.

## Source code

The whole client-side part of the app is made with Angular.

The code is separated to modules, components, services, pipes, directives, interfaces, interceptors.

The forms of the app was made with Angular template and reactive forms.

## Bonuses

My Angular app and the server were deployed on heroku.

#####
