#
# Build stage
#
FROM maven:3.6.0-jdk-11-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

#
# Package stage
#
#FROM openjdk:8
#COPY --from=build /home/app/target/Docker-User-Management.jar /usr/local/lib/Docker-User-Management.jar
#EXPOSE 8080
#ENTRYPOINT ["java","-jar","/usr/local/lib/demo.jar"]



#FROM openjdk:8

ADD target/Docker-Gateway-API.jar Docker-Gateway-API.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","Docker-Gateway-API.jar"]
