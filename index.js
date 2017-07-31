var APP_ID = undefined;
var ROSLIB = require('roslib');
var Alexa = require('alexa-sdk');
var EMMITER = require('eventemitter2');
var HELP_REPROMPT = "What can I help you with?";
var HELP_MESSAGE = "You can say give me that, or, you can I have a bowl... What can I help you with?";
var FORWARD = "forward";
var BACKWARD = "backward";
var TURN_LEFT = "turn left";
var TURN_RIGHT = "turn right";
var STOP_MESSAGE = "Goodbye!";

var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ros.on('connection', function() {
  console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
  console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
  console.log('Connection to websocket server closed.');
});

var cmdVel = new ROSLIB.Topic({
   ros : ros,
   name : '/turtle1/cmd_vel',
   messageType : 'geometry_msgs/Twist'
 });

var twistf = new ROSLIB.Message({
       linear : {
         x : 2.0,
         y : 0.0,
         z : 0.0
       },
       angular : {
         x : 0.0,
         y : 0.0,
         z : 0.0
       }
     });
var twistb = new ROSLIB.Message({
       linear : {
         x : -2.0,
         y : 0.0,
         z : 0.0
       },
       angular : {
         x : 0.0,
         y : 0.0,
         z : 0.0
       }
     });

var twistl = new ROSLIB.Message({
       linear : {
         x : 0.0,
         y : 0.0,
         z : 0.0
       },
       angular : {
         x : 0.0,
         y : 0.0,
         z : 1.6
       }
     });
var twistr = new ROSLIB.Message({
       linear : {
         x : 0.0,
         y : 0.0,
         z : 0.0
       },
       angular : {
         x : 0.0,
         y : 0.0,
         z : -1.5
       }
     });

var handlers = {
  'LaunchRequest': function () {
    console.log('In Launch Request');
		talkmsg = 'Where do you want to go?';
		this.emit(':tell', talkmsg);
  },

   'MessageIntent': function () {
     var cmd = this.event.request.intent.slots.Item.value;
	if(cmd === FORWARD){
     cmdVel.publish(twistf);
     this.emit(':tell', 'Moving forward!');
}
     else if(cmd === BACKWARD){
     cmdVel.publish(twistb);
     this.emit(':tell', 'Moving backwards!');
}
	else if(cmd === TURN_LEFT){
     cmdVel.publish(twistl);
     this.emit(':tell', 'Turning left!');
}
        else if(cmd === TURN_RIGHT){
     cmdVel.publish(twistr);
     this.emit(':tell', 'Turning right!');
}
   },
  'AMAZON.HelpIntent': function () {
    var speechOutput = HELP_MESSAGE;
    var reprompt = HELP_REPROMPT;
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', STOP_MESSAGE);
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', STOP_MESSAGE);
  }
};
exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
