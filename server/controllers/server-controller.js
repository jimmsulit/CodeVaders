var coordinates = [];

module.exports.getcoordinates = function (req, res) {
	res.json(coordinates);
};

module.exports.addcoordinates = function (req, res) {
	coordinates.push(req.body);
	console.log('here');
};