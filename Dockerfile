FROM rabbitmq:3-management
RUN apt-get update
RUN apt-get install -y curl 
EXPOSE  5672 25672 15671 15672
