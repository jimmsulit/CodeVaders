var coordinates = [{longitude: 121.0000, latitude: 14.5800}, {longitude: 120.0000, latitude: 13}, {longitude: 122.0000, latitude: 15.5000}];

module.exports.getcoordinates = function (req, res) {
	res.json(coordinates);
};

module.exports.addcoordinates = function (req, res) {
	coordinates.push(req.body);
};	