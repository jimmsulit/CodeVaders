var coordinates = [{desc: "zzzzzzz", time: 2013, crime: "Holdapping", longitude: 121.0000, latitude: 14.5800}, {desc: "bananabananabanana", time: 2014, crime: "Kidnapping",  longitude: 120.0000, latitude: 13}, {desc: "blablabla", time: 2015, crime: "Snatching",  longitude: 122.0000, latitude: 15.5000}];

module.exports.getcoordinates = function (req, res) {
	res.json(coordinates);
};

module.exports.addcoordinates = function (req, res) {
	coordinates.push(req.body);
};	