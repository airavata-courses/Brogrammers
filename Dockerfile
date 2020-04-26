FROM python:3
#FROM debian:latest

ADD DataRetrieval.py /
RUN pip3 install numpy 
RUN pip3 install pandas
RUN pip3 install scipy
RUN pip3 install pika
RUN pip3 install datetime

RUN pip3 install nexradaws
RUN pip3 install pytz
RUN apt-get install -y curl ca-certificates amqp-tools python dnsutils

EXPOSE 9002

CMD python3 DataRetrieval.py

