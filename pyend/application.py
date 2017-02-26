import json
import sqlite3
import os
from collections import defaultdict
from flask import Flask, render_template, request, url_for

application = Flask(__name__)

soUserDict = defaultdict(int)

''' 
data looks like this: 
{
	userId: id,
	visitCount: 0
}
'''
tempJson = json.dumps([{'a' : 0, "bbb" : 21, "cc" : 73, "def" : 12, "hrj" : 52}])
secJson = json.dumps({
	"josh": 32,
	"brian" : 82,
	"Othamla": 99,
	"addie": 12,
	"campbel": 23
 	})
@application.route("/main")
def acceptStackOverflowData():
	data = request.data
	userData = json.loads(data)
	return render_template("dispSO.html", users=soUserDict)

@application.route("/")
def acceptStackOverflowDataDEV():
	# data = request.data
	data = secJson
	userData = json.loads(data)
	print(userData)
	return render_template("index.html", users=userData.items())


if __name__ == "__main__":
    application.debug = True
    application.run()