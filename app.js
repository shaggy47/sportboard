var trackHelper = require('./lib/geotrackHelper');

var emiter = trackHelper.emiter();
emiter.on('data-loaded', function(data){
    var distance = trackHelper.getTotalDistance(data);
    console.log(distance);
});
trackHelper.loadFile('./Documentation/MyRide.gpx',emiter);




