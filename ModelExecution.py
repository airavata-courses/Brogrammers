

import tempfile
import pytz
templocation = tempfile.mkdtemp()
import pika
import json
import logging
import time

time.sleep( 50 )
logging.basicConfig()

# establishing connection to RabbitMQ server
credentials = pika.PlainCredentials(username='guest', password='guest')
connection = pika.BlockingConnection(pika.ConnectionParameters(
            host = 'rabbitmq-service' , port=5672, credentials=credentials))
 
logging.info("Connection Established")

channel = connection.channel()
 # Publisher 
channel.queue_declare(queue='post-analysis-reflectivity')
data_send = []
def callback(ch, method, properties, body):
    data = json.loads(body) 
    logging.debug("Data sent: ",data)
    channel.basic_publish(exchange='', routing_key='post-analysis-reflectivity', body=json.dumps(data))
        

channel.basic_consume(queue='model-execution', on_message_callback=callback, auto_ack=True)

channel.start_consuming()



