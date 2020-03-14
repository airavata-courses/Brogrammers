#
# Build stage
#
FROM maven:3.6.3-jdk-13
WORKDIR /code

ADD pom.xml /code/pom.xml
ADD src /code/src
RUN ["mvn","clean"] 
RUN ["mvn","install"] 


EXPOSE 8090

ENTRYPOINT ["java","-jar","target/Docker-User-Management.jar"]
