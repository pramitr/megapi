var express = require('express');
var app = express();

var MegaPi = require('megapi').MegaPi;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send('Hello Raspbian!');
});

var controlMoveMotor = function(slot,speed,timeout) {
    var start = function() {
            setTimeout(run,1000);
    }
    var bot = new MegaPi("/dev/ttyUSB0", start);
    var run = function() {
            console.log("Running");
	    if(Object.prototype.toString.call(slot) === '[object Array]') {
		    if(Object.prototype.toString.call(speed) === '[object Array]'){
			    slot.forEach(function(sl,index){
            			bot.encoderMotorRun(sl,speed[index]);
			    })
		    }
	    }
	    else {
		    bot.encoderMotorRun(slot,speed);
	    }
            setTimeout(stop, timeout);
    }
    var stop = function() {
            stopMovingMotors(bot,slot);
    }
    
}

var runMoveMotor = function(slot,speed) {
    var start = function() {
            setTimeout(run,1000);
    }
    var bot = new MegaPi("/dev/ttyUSB0", start);
    var run = function() {
            console.log("Running");
        if(Object.prototype.toString.call(slot) === '[object Array]') {
            if(Object.prototype.toString.call(speed) === '[object Array]'){
			    slot.forEach(function(sl,index){
                    bot.encoderMotorRun(sl,speed[index]);
			    })
            }
        }
	    else {
		    bot.encoderMotorRun(slot,speed);
	    }      
    }
}

var stopMovingMotors = function(bot,slot) {
    if(Object.prototype.toString.call(slot) === '[object Array]') {
        slot.forEach(function(sl){
            bot.encoderMotorRun(sl,0);
        })
    }
    else {
        bot.encoderMotorRun(slot,0);
    }
	console.log("Moving motors stopped");
};

app.get('/moveforward', function(req,res) {
	controlMoveMotor([1,2],[-1,1],1000);
    res.send("Moved forward");
});

app.get('/movebackward', function(req,res) {
	controlMoveMotor([1,2],[1,-1],1000);
    res.send("Moved backward");
});

app.get('/moveleft', function(req,res) {
    controlMoveMotor([1,2],[-1,-1],300);
    res.send("Moved left");
});

app.get('/moveright', function(req,res) {
    controlMoveMotor([1,2],[1,1],300);
    res.send("Moved right");
});

app.get('/armup', function(req,res) {
    controlMoveMotor(3,1,300);
    res.send("Moved left");
});

app.get('/armdown', function(req,res) {
    controlMoveMotor(3,-1,300);
    res.send("Moved left");
});

app.get('/runarmup', function(req,res) {
    runMoveMotor(3,1);
    res.send("Moved left");
});

app.get('/runarmdown', function(req,res) {
    runMoveMotor(3,-1);
    res.send("Moved left");
});

app.get('/runbackward', function(req,res) {
    runMoveMotor([1,2],[1,-1]);
    res.send("Moved backward");
});

app.get('/runforward', function(req,res) {
    runMoveMotor([1,2],[-1,1]);
    res.send("Moved forward");
});

app.get('/stopmotion', function(req,res) {
	var start = function() {
        	setTimeout(stopMotion,1000);
        }
	var bot = new MegaPi("/dev/ttyUSB0", start);
	var stopMotion = function(){
		stopMovingMotors(bot,[1,2,3]);
	}
	res.send("Motors stopped");
});




app.listen(app.get('port'), function() {
	console.log('Web app running on port', app.get('port'));
});
