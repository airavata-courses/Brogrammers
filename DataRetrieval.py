
# Access data 
import json
import pika
#import matplotlib.pyplot as plt
import tempfile
import pytz
from datetime import datetime
#import pyart
import nexradaws
templocation = tempfile.mkdtemp()
import time

conn = nexradaws.NexradAwsInterface()


time.sleep( 50 )

# establishing connection to RabbitMQ server
credentials = pika.PlainCredentials(username='guest', password='guest')
connection = pika.BlockingConnection(pika.ConnectionParameters(
            host = 'rabbit' , port=5672, credentials=credentials))

print ("Connection Established")
channel = connection.channel()

channel.queue_declare(queue='data-retrieval-reflectivity')

# producer queue 
channel.queue_declare(queue='model-execution')



def consumer_callback(ch, method, properties, body):
    data =json.loads(body)
    print("Consumed from data_retrieval", data)
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
    print(results.success)
    file = []

    for scan in results.iter_success():
        print("{} volume scan time {}".format(scan.radar_id,scan.scan_time))
        file.append(scan.filepath)
    Obj = {"file": file}
    print("Publishing to model_execution")
    channel.basic_publish(exchange='', routing_key='model-execution', body=json.dumps(Obj))
    


channel.basic_consume(
    queue='data-retrieval-reflectivity', on_message_callback=consumer_callback, auto_ack=True)

channel.start_consuming()



