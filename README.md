# Angular proof of concept demos
POC demos with pure angular


## Prerequisites
- [ruby, compass] (http://compass-style.org/install/)
- [node.js] (http://nodejs.org/)
- [grunt] (http://gruntjs.com/)
- [bower] (http://bower.io/)


## Getting started

1) Fork/clone a copy to your machine

2) Install the dependancies: `bower install && npm install`

3) Run the app: `grunt serve`

4) Run the tests: `grunt test`


## What's included

various examples of:
- forms
- ng-repeat
- services
- directives
- ui
- unit tests with jasmine, karma
- e2e tests with protractor

Please note, [ui-router] (https://github.com/angular-ui/ui-router) is in use.

## Grunt tasks

`grunt serve` - starts the server, watches for changes and runs unit tests if any changes to js.

`grunt test` - starts the server, runs unit and e2e tests.

`grunt karma` - run the unit tests.

## Misc

You'll notice that instead of including routes in `app.js`, we have our own angular module called `routes`.

In `app/scripts/routes.js`, we use [constants] (https://docs.angularjs.org/guide/providers) to manage our state names, and hook these up with ui-router `$stateProvider` in the config.

## Contributions

Always welcome, please submit a PR :-)
