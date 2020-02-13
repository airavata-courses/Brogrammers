import matplotlib.pyplot as plt
import pika
import json
import matplotlib.pyplot as plt
import pyart
import numpy as np
import io
import boto.s3
from boto.s3.key import Key
from datetime import datetime



# Consumer
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.queue_declare(queue='post-analysis-reflectivity')

# Producer
channel.queue_declare(queue='post-analysis-reflectivity-gateway')


# Put in your secret access key and access key id here
AWS_ACCESS_KEY_ID = ''
AWS_SECRET_ACCESS_KEY = ''

def callback(ch, method, properties, body):   
    result = json.loads(body)
    print("Consumed from model_execution")
    files =  result['file']
    for file in files:
        radar = pyart.io.read_nexrad_archive(file)
        display = pyart.graph.RadarDisplay(radar)
        fig = plt.figure(figsize=(16, 12))

        ax = fig.add_subplot(111)
        display = pyart.graph.RadarDisplay(radar)
        display.plot('reflectivity', 0, ax=ax, title='NEXRAD')
        display.set_limits((-150, 150), (-150, 150), ax=ax)
        img_data = io.BytesIO()
        plt.savefig(img_data, format='png')
        img_data.seek(0)
        conn = boto.s3.connect_to_region('us-east-2',
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY
        )
        bucket = conn.get_bucket('ads-plots')
        k = Key(bucket)
        k.key = 'ads_plots_'+str(datetime.now())
        k.set_contents_from_file(img_data)
        url = 'https://ads-plots.s3.us-east-2.amazonaws.com/'+'ads-plot'+str(datetime.now().strftime("%Y%m%d%H%M%S")) 
        print("Publishing to gateway")
        print("Plot url : ",json.dumps(url))
        channel.basic_publish(exchange='', routing_key='post-analysis-reflectivity-gateway', body=url)
       
        
channel.basic_consume(queue='post-analysis-reflectivity', on_message_callback=callback, auto_ack=True)
channel.start_consuming()







