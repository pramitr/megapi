# Control a simple robot built with Megapi and Raspberry Pi
This tutorial is to setup the server for the customized arm tank robot I have developped. 

## Project Goal
I am using NodeJS server with MegaPi NodeJS API because I want to make a smart and intelligent robot with specific simple household task completion as focus, like cleaning up house by say picking up garbage and put in trash, do laundy, water the plants etc. oh and of course everyone's favorite fetch a beer! This project will continue as a hobby for long time to come, so I need software iteration possible with capability to run complex algorithms. For this I am using Raspberry Pi and Arduino combination. In future I might be using Rpi just as a smart relay between Arduino and some central command server, who knows.

Currently my robot has a simple and not so accurate arm with 3 DOF, 4 wheels to move forward and backward and turn, one ultrasonic sensor to avoid object, (a camera to stream video to server for remote control) and (a line follower module that detects white and black lines).

## Setup process

It requires Raspberry Pi  (I use 3B), Arduino (I have used a variant of [Arduino Mega 2560](https://store.arduino.cc/usa/arduino-mega-2560-rev3) built by Makeblock named as [MegaPi](http://learn.makeblock.com/en/megapi/)), 4 encoder motors, motor drivers.
For robotic arm I have used one robotic arm from Makeblock which has one simple DC motor, also I have used Me Ultrasonic sensor and Raspberry Pi camera module (camera module code not ready yet in this repo).

There are many other ways of implementing motor controllers. Some of my favorites are
* Beaglebone Black
* Raspberry Pi with Expanders like MCP23017, MCP23008, PCF8574, PCF8574A, PCF8575, PCA9685, PCF8591, MUXSHIELD2, GROVEPI, 74HC595, SN74HC595, CD74HC4067
* Arduino Uno
	
For now I am using [MegaPi NodeJS API](https://github.com/Makeblock-official/NodeForMegaPi) here because I thought they have a growing community but it seems they do not maintain the APIs actively and I am already facing bugs so pretty soon I might want to change that to [Jhonny Five](http://johnny-five.io/)
	

If you are familiar with Arduino, thats great! If not, it comes with variety of features to learn about. So let me know what your project interest is and I can give you appropriate guiding links.
Once everything is hardwired (there can be questions over connecting staff, feel free to ask, I have used MegaPi USB port to connect to RPi because I wanted to use the bluetooth and data at the same time, besides Im not a fan of soldering myself so no serial port yet, if I find it required to do, I will update here), below is the programming part with software in Raspberry Pi.

### Install latest NodeJS for ARM processor
[node-arm](http://node-arm.herokuapp.com/)

### Install Megapi npm package
	npm install megapi
An example MegaPi code

	var MegaPi = require("megapi").MegaPi;
	var bot = new MegaPi("/dev/ttyS0", onStart); //"/dev/ttyAMA0" for rpi2, "/dev/ttyS0" for rpi3, "/dev/ttyUSB0" for USB port
	function onStart(){
  	//start your code with a timeout
  		setTimeout(loop,1000);
	}
	var level = 0;
	function loop(){
	//do whatever PWM write function you want
  		bot.digitalWrite(13, level);
  		level = 1-level;
  		setTimeout(loop,500);
	}

### Install Git and fork this repo

	$ sudo apt-get install git
	
Fork [this](https://github.com/pramitr/megapi.git) 
	
### Run the Webserver
	$ cd ~/raspberry-pi-web-server
	$ npm install
	$ node server.js
	
Open a browser and go to `<your-pi's-IP>:5000`

You did it! You successfully ran a webserver on your Raspberry Pi. The server creates some buttons to control the robot remotely over the network. To control the robot from external network you need to do port forwarding from your home router.
 This is a proof of concept code. Now you can modify the MegaPi code to customize your control or add more sofisticated prgrams like use image clssifier to undertand object and pickup, move object to specified location, autonomous movement etc.


### Other optional and additional steps you might like
Please go [here to Sean Hill](https://github.com/sean-hill/raspberry-pi-web-server) for some other additional steps for development and to make your raspberry Pi server accessible to external world. I have used his code for the project packaging and logistics.








