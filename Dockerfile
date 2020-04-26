# # base image
FROM node:12
# #FROM node:10.2.0-alpine

RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN npm install

RUN npm install axios 
EXPOSE 3000
CMD ["npm","start"]

# FROM node:alpine as builder
# WORKDIR /app
# COPY . ./
# RUN npm install

# RUN npm install axios 
# EXPOSE 3000
# CMD ["npm","start"]

FROM node:alpine as builder
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
