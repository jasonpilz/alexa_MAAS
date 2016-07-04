'use strict';

const https       = require('https');
const alexaSkill  = require('./AlexaSkill');

const APP_ID      = undefined;

const hostUrl     = 'http://marsweather.ingenology.com';
const pathUrl     = '/v1/latest/';

// Mass is a child of AlexaSkill
let Mass = function() {
  AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Mass.prototype = Object.create(AlexaSkill.prototype);
Mass.prototype.constructor = Mass;

// Handle Events
Mass.prototype.eventHandlers.onSessionStarted = (sessionStartedRequest, session) => {
  console.log(`Mass onSessionStarted requestId: ${sessionStartedRequest.requestId})
                                     sessionId: ${session.sessionId}`);
};

Mass.prototype.eventHandlers.onLaunch = (launchRequest, session, resoponse) => {
  console.log(`Mass onLaunch requestId: ${launchRequest.requestId}
                             sessionId: ${session.sessionId}`);

  const welomeMessage = `Welcome to mars weather.
                         You can ask me for the current weather conditions,
                         temperature or humidity`;
  response.ask(welomeMessage);
};

Mass.prototype.eventHandlers.onSessionEnded = (sessionEndedRequest, session) => {
  console.log(`Mass onSessionEnded requestId: ${sessionEndedRequest.requestId}
                                   sessionId: ${session.sessionId}`);
};

const weatherMetrics = new Array('humidity',
                                 'temperature',
                                 'pressure',
                                 'condition',
                                 'conditions',
                                 'earth date',
                                 'terrestrial date');

// Handle Intents
Mass.prototype.intentHandlers = {
  WeatherIntent: (intent, session, response) => {
    let weatherMetricSlot = intent.slots.WeatherMetric;

    // if (weatherMetricSlot && weatherMetricSlot.value) {
    //   if (weatherMetrics.include?(weatherMetricSlot.value) {

    //   } else {
    //     handleNoSlotDialogRequest(intent, session, response);
    //   }
    // }
  },

  "AMAZON.HelpIntent": (intent, session, response) => {
    response.ask("You can ask me for the temperature, humidity or conditions");
  }
};

// Helper Functions
function callMassApi(callback) {
  let options = {
    hostname: hostUrl,
    port: 443,
    path: pathUrl,
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  makeRequest(options, callback);
}

function makeRequest (options, callback) {

}

// Create the handler that responds to the Alexa Request
exports.handler = (event, context) => {

  // Create an instance of the Mass skill
  const massSkill = new Mass();
  massSkill.execute(event, context);
};
