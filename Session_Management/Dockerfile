# base image
FROM node:12.2.0-alpine

RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN npm install
EXPOSE 4001


ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
# CMD /wait
CMD /wait && npm start