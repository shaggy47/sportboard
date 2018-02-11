var geoTracker = require('./lib/geotrackHelper');
var parser = require('./lib/xmlParser');
var mongoDb = require('mongodb').MongoClient;
parser.getPointsData('./Documentation/MyRide.gpx');