import unittest
from PostAnalysis import plot
import warnings
with warnings.catch_warnings():
    warnings.filterwarnings("ignore",category=DeprecationWarning)
    import pyart,matplotlib

class Tests(unittest.TestCase):
    
    def test_dr1(self):
        result,plot = plot('KTLX20160531_000848_V06.gz')
        expected = 'success'
        self.assertEqual(result,expected,msg = "1 failed")


if __name__ == '__main__':
	unittest.main()