FROM python:3

ADD PostAnalysis.py /
RUN pip3 install numpy 
RUN pip3 install pandas
RUN pip3 install scipy
RUN pip3 install matplotlib
RUN pip3 install boto
RUN pip3 install pika
RUn pip3 install netCDF4
RUN git clone https://github.com/ARM-DOE/pyart.git &&\
    cd pyart &&\
    python setup.py install



CMD [ "python3", "./PostAnalysis.py" ]