var coordinates = [{longitude: 50, latitude: 10}, {longitude: 52, latitude: 10}, {longitude: 50, latitude: 12}];

module.exports.getcoordinates = function (req, res) {
	res.json(coordinates);
};

module.exports.addcoordinates = function (req, res) {
	coordinates.push(req.body);
};	