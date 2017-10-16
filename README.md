# Control simple Arm Tank robot built with Megapi and Raspberry Pi
	This tutorial is to setup the server for the customized arm tank robot I have developped

## Install latest NodeJS for ARM processor
[node-arm](http://node-arm.herokuapp.com/)

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
Please go here for some other steps to make your raspberry Pi server accessible to external world [Sean Hill](https://github.com/sean-hill/raspberry-pi-web-server)








