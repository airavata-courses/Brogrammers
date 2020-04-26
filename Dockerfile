# base image
FROM node:12
#FROM node:10.2.0-alpine

RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN npm install

RUN npm install axios 
EXPOSE 3000
CMD ["npm","start"]
