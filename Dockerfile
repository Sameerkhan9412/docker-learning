
#base image
FROM node:20-alpine3.18

# set working direcory
WORKDIR /app

# copy package.json and package-lock.jscon to the working dir
COPY package.json .
COPY  package-lock.json .

# install dependencis
RUN npm install

# copy rest of the code
COPY . .
EXPOSE 3000 3001 3002
# EXPOSE 3000-3005 ->set range

# start the application
CMD [ "npm","start" ]


# docker build  -t expressapp . --> command to build image