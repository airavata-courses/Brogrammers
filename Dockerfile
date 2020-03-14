#
# Build stage
#
FROM maven:3.6.3-jdk-13
WORKDIR /code

ADD UserManagement/pom.xml /code/pom.xml
ADD UserManagement/src /code/src
RUN ["mvn","clean"] 
RUN ["mvn","install"] 


EXPOSE 8090

ENTRYPOINT ["java","-jar","target/Docker-User-Management.jar"]
