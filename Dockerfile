FROM python:3

ADD ModelExecution.py /
#RUN pip3 install cdnumpy 
RUN pip3 install pika
RUN pip3 install datetime
RUN pip3 install pytz

CMD python3 ModelExecution.py
