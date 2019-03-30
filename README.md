# ContactApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

The Contact App displays a list of contacts fetched from JSON and its details.
The UI consists of:
- A top bar which consists of a search box to search for a contact(not impletemented yet), 
  the login user and profile photo.
- The left side bar which consists of a list of full names of contacts.
- The right main panel which consists of the details about the selected contact. 
  The details include the selected contact photo, a button to send a message, 
  rating (number of hearts with a max of 5)(not yet implemented), a description of the contact. 
  A table of likes and dislikes.

Using Angular's routing, user can navigate between contacts using browser history. Also user can bookmark a URL to land at that contact directly.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
