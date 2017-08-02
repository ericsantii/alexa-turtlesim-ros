# alexa-turtlesim-ros
Controlling the ROS turtlesim simulator with Amazon Alexa

### First step is to have ROS on your system
* [ROS download instructions](http://wiki.ros.org/ROS/Installation)

In addition to intalling ROS (any desktop-full, desktop, or ros-base will work), you will need to install rosbridge-server:

``
sudo apt-get install ros-<distro>-rosbridge-server
``
Where "distro" is your downloaded ROS version
  
### Next install npm and node.js
* [npm and node.js download instructions](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/)

Check if the installation was succesfull:
``
node --version && npm --version
``
### Install the bespoken tools command line tool(bst):
``
sudo npm install bespoken-tools -g
``
### Configure *[your amazon alexa skill,clone this guthub,start proxy server and intall dependencies on the cloned github's location](http://docs.bespoken.tools/en/latest/tutorials/tutorial_lambda_nodejs/)
Just follow the instructions but remember to clone this github and use the Intent Schema and Sample Utterances given
in this github as well.

### (If you followed the previous step you've alredy completed this step)Clone this github repository :
``
git clone https://github.com/ericsantii/alexa-turtlesim-ros
``
### (If you followed the previous step you've alredy completed this step)Install dependencies :
``
cd alexa-turtlesim-ros npm install
``
### (If you followed the previous step you've alredy completed this step)Start proxy server :
``
bst proxy lambda index.js
``
### Start ros master node:
``
roscore
``
### Start turtlesim
``
rosrun turtlesim turtlesim_node
``
### To check the output on the topic:
``
rostopic echo /turtle1/cmd_vel
``
### Start the rosbrige_server
``
roslaunch rosbridge_server rosbridge_websocket.launch
``
### Now test the skill on the Amazon's Developer Portal or on your Alexa device


