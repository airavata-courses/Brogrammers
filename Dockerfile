FROM openjdk:8

ADD target/Docker-Gateway-API.jar Docker-Gateway-API.jar

EXPOSE 8085

ENTRYPOINT ["java","-jar","Docker-Gateway-API.jar"]