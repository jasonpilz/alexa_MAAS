'use strict';

const https       = require('https');
const alexaSkill  = require('./AlexaSkill');

const APP_ID      = undefined;
const accessToken = undefined;

const maasUrl     = undefined;

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
                         temperature or humidity`
  response.ask(welomeMessage);
};

Mass.prototype.eventHandlers.onSessionEnded = (sessionEndedRequest, session) => {
  console.log(`Mass onSessionEnded requestId: ${sessionEndedRequest.requestId}
                                   sessionId: ${session.sessionId}`);
};

// Handle Intents
Mass.prototype.intentHandlers = {
  WeatherIntent: (intent, session, response) => {
    // TODO
  },

  "AMAZON.HelpIntent": (intent, session, response) => {
    response.ask("You can ask me for the temperature, humidity or conditions");
  }
};

// Helper Functions
// TODO


// Create the handler that responds to the Alexa Request
exports.handler = (event, context) => {

  // Create an instance of the Mass skill
  const massSkill = new Mass();
  MassSkill.execute(event, context);
};

