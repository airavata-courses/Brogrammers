
import matplotlib.pyplot as plt
import pika
import json
import pyart
import numpy as np
import io
from datetime import datetime
import os
import base64
import  time
import logging 



logging.basicConfig()
# establishing connection to RabbitMQ server
credentials = pika.PlainCredentials(username='guest', password='guest')
connection = pika.BlockingConnection(pika.ConnectionParameters(
            host = 'rabbitmq-service' , port=5672, credentials=credentials))

channel = connection.channel()

channel.queue_declare(queue='post-analysis-reflectivity')

# Producer
channel.queue_declare(queue='post-analysis-reflectivity-gateway')

def plot_data(file):
    radar = pyart.io.read_nexrad_archive(file)
    display = pyart.graph.RadarDisplay(radar)
    fig = plt.figure(figsize=(12, 12))
    
    ax = fig.add_subplot(111)
    display = pyart.graph.RadarDisplay(radar)
    display.plot('reflectivity', 0, ax=ax, title='NEXRAD')
    display.set_limits((-150, 150), (-150, 150), ax=ax)
    datetimeStr= datetime.now().strftime("%Y%m%d%H%M%S")
    img_data = io.BytesIO()
    plt.savefig(os.getcwd() + "/" + "Plots" + "/" + str(datetimeStr)+".png")
    img_data.seek(0)
    
    file_out= (os.getcwd() + "/" + "Plots" + "/" + str(datetimeStr) +".png")
    return 'success',file_out



def callback(ch, method, properties, body):   
    result = json.loads(body)
    logging.info("Connection Established")
    files =  result['file']
    for file in files:
        output,file = plot_data(file)
        with open(file, "rb") as img:
            imgString = base64.b64encode(img.read())
            logging.debug("Image in bytes ",imgString)
            ApiPayload = {"radar_img":str(imgString.decode("utf-8"))}
        logging.info("Publishing to gateway")
        channel.basic_publish(exchange='', routing_key='post-analysis-reflectivity-gateway', body=json.dumps(ApiPayload))
       
        
channel.basic_consume(queue='post-analysis-reflectivity', on_message_callback=callback, auto_ack=True)
channel.start_consuming()
