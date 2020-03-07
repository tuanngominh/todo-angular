https://github.com/tuanngominh/todo-angular/workflows/nodejs/badge.svg

Todo app for runner fellows (My weekend play ground too) at https://ultra-marathon-training.web.app/  

# Todos
CI/CD
- [x] Lint, test, deploy with github action. [Reference](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions).

Auth:
- Guess go to landing page.
- User go to activities page.

Features:
- [ ] Search and listing of a huge list
- [ ] Search by name, label -> full text search? listing result during typing, when enter show result in list.
- [ ] List: by default most recent view items. 

More features:
- [ ] Create training plan
- [ ] Copy a training plan
- [ ] Start a training plan
- [ ] Sync from sport tracker apps (like strava or garmin) then allow to link to a training plan

A bit on auth:
- [ ] Firebase auth with google account.
- [ ] Things come from browser always have owner, updateTime, viewTime?
- [ ] With none public things, only owner can delete, update, view otherwise everyone can view and copy it.

Entities:
- [ ] Training plan: name, type, start, end
- [ ] Activity: name, description, content (free style structure), optional linked training plan.
- [ ] Labels

Scripts:
- [ ] To generate huge amount of data

Storybook - components:
- [ ] Search with dropdown
- [ ] List
- [ ] Labels

State management:
- [ ] ngrx?

Others
- [ ] Angular theme change?
- [ ] None material theme like https://vmware.github.io/ ? No heavy data app with huge form but elegant game style form.
- [ ] Mobile first? using test like cypress to confirm?
- [ ] PWA (Progressive Web App)?

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

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
