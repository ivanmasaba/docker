# First get this node image from docker hub or if already exists on pc use that.
# get node version 17 and use alpine distribution of linux
# this is the 1st layer of image THE PARENT IMAGE
FROM node:17-alpine   

# add another layer on top of the parent image
# since the app files are in same location as docker file use a dot for location 
# and destination specify a new folder to be created and files to be copied to.

# first specify the working directory so all commands are run in there
WORKDIR /app

COPY . .

# create a command to install dependencies for the app
RUN npm install

# let the container expose the port to connect since the app will be running
#  inside the conatiner
# this is optional, use this when u are going to use docker desktop to run images 
EXPOSE 4000

#  create command to run the app e.g node app.js
# but we donnot use " RUN " again coz we cannot run an app when an image is being created
#  so we use CMD this only runs a specified command only when a conatiner(an instance of the image) 
# is running
# 1st argument - command. 2nd argument - file
CMD ["node", "app.js"]