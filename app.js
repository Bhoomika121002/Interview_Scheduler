const express = require('express');
const { google } = require('googleapis');

const app = express();
const port = 3001; 




const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

const calendar = google.calendar({
  version: 'v3',
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient
});

app.get('/', (req, res) => {
  calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      if (result.data.items.length) {
        res.send(JSON.stringify({ events: result.data.items }));
      } else {
        res.send(JSON.stringify({ message: 'No upcoming events found.' }));
      }
    }
  });
});

app.get("/createEvent", (req, res) => {
  var event = {
    'summary': 'Interview',
    'location': 'Online',
    'description': 'Meet between bhoomika & mani',
    'start': {
      'dateTime': '2023-12-12T02:30:00+00:00',
      'timeZone': 'Asia/Kolkata',
    },
    'end': {
      'dateTime': '2023-12-12T3:30:00+00:00',
      'timeZone': 'Asia/Kolkata',
    },
    'summary': 'Interview',
    'location': 'Online',
    'description': 'Meet between bhoomika & shikhar',
    'start': {
      'dateTime': '2023-12-11T04:30:00+00:00',
      'timeZone': 'Asia/Kolkata',
    },
    'end': {
      'dateTime': '2023-12-11T5:30:00+00:00',
      'timeZone': 'Asia/Kolkata',
    },
    'summary': 'Interview',
    'location': 'Online',
    'description': 'Meet between bhoomika & Nupur',
    'start': {
      'dateTime': '2023-12-27T04:30:00+00:00',
      'timeZone': 'Asia/Kolkata',
    },
    'end': {
      'dateTime': '2023-12-11T5:30:00+00:00',
      'timeZone': 'Asia/Kolkata',
    },
    'attendees': [],
    'reminders': {
      'useDefault': false,
      'overrides': [
        { 'method': 'email', 'minutes': 24 * 60 },
        { 'method': 'popup', 'minutes': 10 },
      ],
    },
  };

  const auth = new google.auth.GoogleAuth({
    keyFile: 'C:/Users/hp/Downloads/calender-407312-229586166dc1.json',
    scopes: 'https://www.googleapis.com/auth/calendar',
  });
  auth.getClient().then(a => {
    calendar.events.insert({
      auth: a,
      calendarId: GOOGLE_CALENDAR_ID,
      resource: event,
    }, function (err, event) {
      if (err) {
        console.log('There was an error contacting the Calendar service: ' + err);
        return;
      }
      console.log('Event created: %s', event.data);
      res.jsonp("Event successfully created!");
    });
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${3001}`);
});
