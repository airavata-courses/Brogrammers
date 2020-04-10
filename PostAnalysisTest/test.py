import unittest
from PostAnalysisTest import plot_data
import warnings
import pyart
import numpy as np
import matplotlib.pyplot as plt

class Tests(unittest.TestCase):
    
    def test1(self):
        result,plot_result = plot_data('KTLX20160531_000848_V06.gz')
        expected = 'success'
        self.assertEqual(result,expected,msg = "1 failed")


if __name__ == '__main__':
	unittest.main()