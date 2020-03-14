

import tempfile
import pytz
templocation = tempfile.mkdtemp()
import pika
import json

import time

time.sleep( 50 )

# establishing connection to RabbitMQ server
credentials = pika.PlainCredentials(username='guest', password='guest')
connection = pika.BlockingConnection(pika.ConnectionParameters(
            host = 'rabbit' , port=5672, credentials=credentials))
 
print ("Connection Established")

channel = connection.channel()
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



