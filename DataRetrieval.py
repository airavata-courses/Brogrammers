
# Access data 
import json
import pika
import tempfile
import pytz
from datetime import datetime
import nexradaws
templocation = tempfile.mkdtemp()
import time
import logging

conn = nexradaws.NexradAwsInterface()


logging.basicConfig()
time.sleep( 50 )

# establishing connection to RabbitMQ server
credentials = pika.PlainCredentials(username='guest', password='guest')
connection = pika.BlockingConnection(pika.ConnectionParameters(
            host = 'rabbitmq-service' , port=5672, credentials=credentials))


channel = connection.channel()
channel.queue_declare(queue='data-retrieval-reflectivity')

# producer queue 
channel.queue_declare(queue='model-execution')


logging.info("Connection Established Waiting for data")
def consumer_callback(ch, method, properties, body):
    data =json.loads(body)
    logging.info("Connection Established received data ",data)
    date = data['date']
    year, month, day = date.split('-')
    radars = conn.get_avail_radars(year,month,day)
    radar_station = data['radar']
    availscans = conn.get_avail_scans(year,month,day, radar_station)
    
    central_timezone = pytz.timezone('US/Central')
    start = central_timezone.localize(datetime(int(year),int(month),int(day),17,0))
    end = central_timezone.localize (datetime(int(year),int(month),int(day),19,0))
    scans = conn.get_avail_scans_in_range(start, end, radar_station)
    results = conn.download(scans[0], templocation)
    logging.info("Result scan ",results.success)
    file = []

    for scan in results.iter_success():
        print("{} volume scan time {}".format(scan.radar_id,scan.scan_time))
        file.append(scan.filepath)
    Obj = {"file": file}
    logging.info("Publishing to model_execution")
    channel.basic_publish(exchange='', routing_key='model-execution', body=json.dumps(Obj))
    


channel.basic_consume(
    queue='data-retrieval-reflectivity', on_message_callback=consumer_callback, auto_ack=True)

channel.start_consuming()



