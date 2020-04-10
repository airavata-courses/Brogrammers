import nexradaws

def get_scans(years,months,days,radars):
    test_conn = nexradaws.NexradAwsInterface()
    scans = test_conn.get_avail_scans(years, months, days, radars)
    return str(scans[0])