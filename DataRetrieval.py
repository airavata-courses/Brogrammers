
"""
Access NEXRAD radar data via Amazon Web Services and plot with MetPy
"""
# Access data 
import json
import pika
import matplotlib.pyplot as plt
import tempfile
import pytz
from datetime import datetime
import pyart
import nexradaws
templocation = tempfile.mkdtemp()


conn = nexradaws.NexradAwsInterface()

# consumer queue
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.queue_declare(queue='data_retrieval')

# producer queue 
# Publish created url
connectionPublish = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channelPublish = connectionPublish.channel()

channelPublish.queue_declare(queue='model_execution')



def consumer_callback(ch, method, properties, body):
    data =json.loads(body)
    print(data)
    date = data['date']
    month, day, year = date.split('/')
    print(type(month),day,year)
    radars = conn.get_avail_radars(year,month,day)
    print(type)
    radar_station = data['radar_station']
    availscans = conn.get_avail_scans(year,month,day, radar_station)
    
    central_timezone = pytz.timezone('US/Central')
    start = central_timezone.localize(datetime(int(year),int(month),int(day),17,0))
    end = central_timezone.localize (datetime(int(year),int(month),int(day),19,0))
    scans = conn.get_avail_scans_in_range(start, end, radar_station)
    print("There are {} scans available between {} and {}\n".format(len(scans), start, end))
    results = conn.download(scans[0], templocation)
    print(results.success)
    file = []

    for scan in results.iter_success():
        print("{} volume scan time {}".format(scan.radar_id,scan.scan_time))
        file.append(scan.filepath)
    Obj = {"file": file}
    print(Obj)
    channelPublish.basic_publish(exchange='', routing_key='model_execution', body=json.dumps(Obj))
    


channel.basic_consume(
    queue='data_retrieval', on_message_callback=consumer_callback, auto_ack=True)

channel.start_consuming()

channelPublish.close()

