

import tempfile
import pytz
import nexradaws
templocation = tempfile.mkdtemp()
import pika
import json
import matplotlib.pyplot as plt

# Consumer 
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channel = connection.channel()
channel.queue_declare(queue='model-execution')
 
 # Publisher 
channel.queue_declare(queue='post-analysis-reflectivity')
data_send = []
def callback(ch, method, properties, body):
    data = json.loads(body) 
    print(data)
    print("Consumed from model_execution")
    print("Publishing to post_analysis")
    print("Data sent: ",data)
    channel.basic_publish(exchange='', routing_key='post-analysis-reflectivity', body=json.dumps(data))
        

channel.basic_consume(
queue='model-execution', on_message_callback=callback, auto_ack=True)

channel.start_consuming()



