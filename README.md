# Control simple Arm Tank robot built with Megapi and Raspberry Pi
This tutorial is to setup the server for the customized arm tank robot I have developped
It requires Raspberry Pi  (I use 3B), Arduino (I have used MegaPi), 4 encoder motors, motor drivers.
For robotic arm I have used one robotic arm from Makeblock which has one simple DC motor, also I have used Me Ultrasonic sensor and Raspberry Pi camera module (camera module code not ready yet in this repo).

If you are familiar with Arduino, thats great! If not, it comes with variety of features to learn about. So let me know what your project interest is and I can give you appropriate guiding links.
Once everything is hardwired, below is the programming part with software.

## Install latest NodeJS for ARM processor
[node-arm](http://node-arm.herokuapp.com/)

## Install Megapi npm package
	npm install megapi
Insert the initial code for starting MegaPi first.

	var MegaPi = require("megapi").MegaPi;
	var bot = new MegaPi("/dev/ttyS0", onStart); //"/dev/ttyAMA0" for rpi2, "/dev/ttyS0" for rpi3
	function onStart(){
  	//start your code with a timeout
  		setTimeout(loop,1000);
	}
	var level = 0;
	function loop(){
  		bot.digitalWrite(13, level);
  		level = 1-level;
  		setTimeout(loop,500);
	}

## Install Git and fork this repo

	$ sudo apt-get install git
	
Fork [this](https://github.com/pramitr/megapi.git) 
	
## Run the Webserver
	$ cd ~/raspberry-pi-web-server
	$ npm install
	$ node server.js
	
Open a browser and go to `<your-pi's-IP>:5000`

You did it! You successfully ran a webserver on your Raspberry Pi. The server creates some buttons to control the robot remotely over the network. To control the robot from external network you need to do port forwarding from your home router.
 This is a proof of concept code. Now you can modify the MegaPi code to customize your control or add more sofisticated prgrams like use image clssifier to undertand object and pickup, move object to specified location, autonomous movement etc.


## Other optional and additional steps you might like
Please go [here to Sean Hill](https://github.com/sean-hill/raspberry-pi-web-server) for some other additional steps for development and to make your raspberry Pi server accessible to external world. I have used his code for the project packaging and logistics.








