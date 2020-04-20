

import tempfile
import pytz
templocation = tempfile.mkdtemp()
import pika
import json
import logging
import time



# establishing connection to RabbitMQ server
credentials = pika.PlainCredentials(username='guest', password='guest')
connection = pika.BlockingConnection(pika.ConnectionParameters(
            host = 'rabbitmq' , port=5672, credentials=credentials))
# Consumer
channel = connection.channel()
channel.queue_declare(queue='model-execution')
 
logging.warning("Connection Established Model Execution")

 # Publisher 
channel.queue_declare(queue='post-analysis-reflectivity')
data_send = []
def callback(ch, method, properties, body):
    data = json.loads(body) 
    logging.warning("Data sent from model execution: ",data)
    channel.basic_publish(exchange='', routing_key='post-analysis-reflectivity', body=json.dumps(data))
        

channel.basic_consume(queue='model-execution', on_message_callback=callback, auto_ack=True)

channel.start_consuming()



