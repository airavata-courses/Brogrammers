#FROM openjdk:8

#ADD target/Docker-Gateway-API.jar Docker-Gateway-API.jar


FROM maven:3.6.3-jdk-13
WORKDIR /code

ADD pom.xml /code/pom.xml
ADD src /code/src
RUN ["mvn","clean"] 
RUN ["mvn","install"] 


EXPOSE 8085

ENTRYPOINT ["java","-jar","target/Docker-Gateway-API.jar"]
