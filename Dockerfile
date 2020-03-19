# base image
FROM node:12.2.0-alpine

RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN npm install
RUN sudo npm install axios --save
EXPOSE 3000
CMD ["npm","start"]
