import unittest
from test import get_scans

class Test(unittest.TestCase):

    def test1(self):
        expected = "<AwsNexradFile object - 2016/05/31/KTLX/KTLX20160531_000848_V06.gz>"
        result = get_scans('2016','05','31','KTLX')
        self.assertEqual(result,expected,msg = "Scan 1 failed")

    def test2(self):
        expected = "<AwsNexradFile object - 2013/05/31/KTLX/KTLX20130531_000358_V06.gz>"
        result = get_scans('2013','05','31','KTLX')
        self.assertEqual(result,expected,msg = "Scan 2 failed")

if __name__ == '__main__':
	print("Start test for Data Retrieval")
	unittest.main()