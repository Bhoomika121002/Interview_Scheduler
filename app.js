const express = require('express');
const { google } = require('googleapis');

const app = express();
const port = 3001; 


const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyZdgyEN/L402V\nzYS9Bga1gi1A8inWQlLW7wuO65q3wD1dAgAhogjbmwjCZbt3l4t42rGw5SkM4sE9\nLZhCYUPJCUYThTQjrTVYnhNeN3KR2NwrNtr7rTXP0+YbKbi7Rs+THwecs1SYN8Qt\nmlOJllujYfsxRCkwm1OSH3YRcNqKs0VQdVzsJEqLzZxh790f7EgYu0BHPG3G5+Ic\nBx13n5zOdsrB0QdVq2tii/3RKusUwpJgINRSru64pFG7xPRwiAu/ATKwzF2hWnKh\nGBp3uuDKnqpJduFMhHs912ilA2h1vEUqi71l6JTrAW3ksd0VT6swfx8o1jhMBM4o\ncCXpfPlZAgMBAAECggEAEwqBx947NNTfDBUyjMZe4vKxB9SRGJhdpSlAj5GgIuq2\n4f17rBtSXLYweidHmh0nus+E1b+v4Ps26uO586PUC1odC6pVBVXQctP0d0LtzJlb\n7pTdTK2RJ8yTK+UJHZwSPb67HkOZzOFu4/sr3WyZ/VdQ61I+Hz0E73zCKlxkRxdr\npm/W3XYkX51qaAOykWc3DnLhQyof29Rqgf5QSYPP6iISyOXgHHALtSnZIEJgJ7Io\nNYjEQDCKMIoByNlXBzLEzB9zX7p2KO3ieJpDNwCQhBdep6bp8Q1IMVJmteJNWG7a\npJhbMnuuIsgCt2d4fyaqBmIGUsbeR9XkjKlARsZkLQKBgQDiD8Codm4tKETnlJLb\ntCWAtTMsMtpUceAAgKM08Q9oTQITjkFvzq+TlcqxZT/VC1QrwLL4wNpEAwzC5ZzP\niHWb5sRrPO0FlofDne/GHiJfvilx0BoBKdIEcBvPR0S6iwZkUNXHuZMpNzrWpGM2\nXHEhVyfj3z8U+XI999ofx+XIOwKBgQDKBiHBL0wiX/3kEg2apr48HFoDPjyV6XXh\nl43WvtjDKj6N4kDoI+iM/Jq2zofIHjUOUvpKWiMLgcyc0nS19ag7HI5WP/JOOEaJ\ncgV1bKvPA5r/oyLre2bFd2CdyLgVWexVLXuOuudsH+Et1cPNv75mPOJi5K8SGI8b\n5idkS7n/ewKBgGPxLu3Lnh4cxYnUp7C2TjY+5ebOfLQEvFG8jWskf/lOwnI+3DNA\nH2OSP9B5wOTBY28MfJN5P4X+CzBHLzKZU9WfCouWnftwd4lGU/E09WF6wvvsUvLc\nuFr57XGQQpRuTl8fVcQ9CRCZuEuY1bv81o805w/ZbRwqxBUddLPEPpRtAoGAK0Oi\n6O9LG7V49uXS2gLJjK/5quYiLWyg3R4KtymJ3EnouZPxmIVQIRlbvLiAJaAqdpXY\nmiGxjZ5PhmofqnQgggA8j0YEizHMEVVEy//oz12TTRnPuaRkvvcwzrmUiqYGUbt6\n0Xc/Zk1xeNJlq2Nb0CNLzCfzQinWRABHAViiTY8CgYEAu31NMvwwoIBFe/9YmcCB\nPwl5hiKsmypcHGK+yzT3ZAh5H9lAcQMxKIp6vDwnYyExcMkNnMYctNO+iBEGimSZ\nIduXkg4JE0a/gRjFWRNRHdY7fAl6aep8wu17c2OoIwWgt7Dm9v3AGk+HFPdhv/xx\n0Cxp6/84smuiRUxuaDTBMeY=\n-----END PRIVATE KEY-----\n"
const GOOGLE_CLIENT_EMAIL = "google-calender@calender-407312.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "23792116215"
const GOOGLE_CALENDAR_ID = "5f31c73312c4cbdbb4ef9f84c47062ed300529497c8fc78216a2f9797974a33b@group.calendar.google.com"

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
