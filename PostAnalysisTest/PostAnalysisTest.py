
import matplotlib.pyplot as plt
import json
import pyart
import numpy as np
import io
from datetime import datetime
import os
import base64
import logging 


def plot_data(file):
    radar = pyart.io.read_nexrad_archive(file)
    display = pyart.graph.RadarDisplay(radar)
    fig = plt.figure(figsize=(12, 12))
    
    ax = fig.add_subplot(111)
    display = pyart.graph.RadarDisplay(radar)
    display.plot('reflectivity', 0, ax=ax, title='NEXRAD')
    display.set_limits((-150, 150), (-150, 150), ax=ax)
    datetimeStr= datetime.now().strftime("%Y%m%d%H%M%S")
    img_data = io.BytesIO()
    plt.savefig(os.getcwd() + "/" + "Plots" + "/" + str(datetimeStr)+".png")
    img_data.seek(0)
    
    file_out= (os.getcwd() + "/" + "Plots" + "/" + str(datetimeStr) +".png")
    return 'success',file_out