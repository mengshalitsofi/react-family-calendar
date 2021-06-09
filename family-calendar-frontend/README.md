# react-family-calendar
This project consists of a Rails backend and a React Frontend. This is the fifth project for Flatiron School, created by Mengsha Li.

The purpose of this application is to allow family member to update and view a monthly calendar, seeing all the events happening this month, and adding new events.

## Getting Started
1. You might need to install the necessary gems first. In /family-calendar-backend, run the following:
  bundle install
2. Then, still in /family-calendar-backend, start the backend server:
  rails s
3. To start the frontend, go to /family-calendar-frontend and run:
  npm start

## Application flow
Opening http://localhost:3000/events would present the user with a monthly calendar view. Clicking on 'Add' in a specific day would show a page with a form for adding a new event. Once the event is added, the user will be redirected back to the main page to see the refreshed calendar. The user can click on an event to view the details of this event, and have the option to edit or delete it.

License
This project is licensed under MIT

Authors
Mengsha Li