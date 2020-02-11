

import tempfile
import pytz
import nexradaws
templocation = tempfile.mkdtemp()
import pika
import json
import matplotlib.pyplot as plt

# consumer 
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channel = connection.channel()
channel.queue_declare(queue='model_execution')
 
 # publisher 
connectionPublish = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channelPublish = connectionPublish.channel()

channelPublish.queue_declare(queue='post_analysis')
data_send = []
def callback(ch, method, properties, body):
    data = json.loads(body) 
    print("Consumed from model_execution")
    print("Publishing to post_analysis")
    print("Data sent: ",data)
    channelPublish.basic_publish(exchange='', routing_key='post_analysis', body=json.dumps(data))
        

channel.basic_consume(
queue='model_execution', on_message_callback=callback, auto_ack=True)

channel.start_consuming()
channelPublish.close()


