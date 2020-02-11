import matplotlib.pyplot as plt
from metpy.plots import add_timestamp, ctables
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

channel.queue_declare(queue='post_analysis')


# Producer
connectionPublish = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channlePostAnalysis = connectionPublish.channel()

channlePostAnalysis.queue_declare(queue='gateway')
AWS_ACCESS_KEY_ID = 'AKIAWZXOTITBX2KGL5G5'
AWS_SECRET_ACCESS_KEY = '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'
#bucket_name = AWS_ACCESS_KEY_ID.lower() + '-dump'

# bucket = conn.create_bucket(bucket_name,
#     location=boto.s3.connection.Location.DEFAULT)

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
        k.key = 'ads_plot'+str(datetime.now())
        k.set_contents_from_file(img_data)
        url = 'https://ads-plots.s3.us-east-2.amazonaws.com/'+'ads-plot'+str(datetime.now()) 
        print("Publishing to gateway")
        print("Plot url : ",url)
        channlePostAnalysis.basic_publish(exchange='', routing_key='gateway', body=json.dumps(url))
       
        
channel.basic_consume(queue='post_analysis', on_message_callback=callback, auto_ack=True)
channel.start_consuming()







