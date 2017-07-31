# alexa-turtlesim-ros
Controlling the ROS turtlesim simulator with Amazon Alexa

### First step is to have ROS on your system
* [ROS download instructions](http://wiki.ros.org/ROS/Installation)

In addition to intalling ROS (any desktop-full, desktop, or ros-base will work), you will need to install rosbridge-server:

``
sudo apt-get install ros-<distro>-rosbridge-server
``
Where "<distro>" is youre downloaded ROS version
  
### Next install npm and node.js
* [npm and node.js download instructions](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/)

Check if the installation was succesfull:
``
node --version && npm --version
``
### Next install the bespoken tools command line tool(bst):
``
sudo npm install bespoken-tools -g
``
### Next clone the github repository :
``
git clone https://github.com/ericsantii/alexa-turtlesim-ros
``
### Install dependencies :
``
cd alexa-turtlesim-ros
``
``
npm install
``

