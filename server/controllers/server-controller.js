var coordinates = [
	{desc: "Description", time: 2013, crime: "Holdapping", longitude: 121.0000, latitude: 14.5800},
	{desc: "Description", time: 2015, crime: "Snatching",  longitude: 121.04450473121335, latitude: 14.75724239665992},
	{desc: "Description", time: 2014, crime: "Robbery",  longitude: 121.04450473121335, latitude: 14.75724239665992},
	{desc: "Description", time: 2013, crime: "Theft",  longitude: 121.04450473121335, latitude: 14.75724239665992},
	{desc: "Description", time: 2013, crime: "Carnapping",  longitude: 121.04450473121335, latitude: 14.75724239665992},
	{desc: "Description", time: 2013, crime: "Homicide",  longitude: 121.04418286613156, latitude: 14.75406764430833},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.04450473121335, latitude: 14.75724239665992},
	{desc: "Description", time: 2013, crime: "Snatching",  longitude: 121.0423160486572, latitude: 14.75635015068003},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.03467559814453, latitude: 14.75724239665992},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.04450473121335, latitude: 14.580664532529024},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.04450473121335, latitude: 14.75724239665992},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.04450473121335, latitude: 14.75724239665992},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.04450473121335, latitude: 14.75724239665992},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.04450473121335, latitude: 14.75724232343215},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.04450473121335, latitude: 14.757242316234522},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.04450473121335, latitude: 14.75724235234312},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.04450473121335, latitude: 14.75724239142314},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.00274658203125, latitude: 14.627841212715452},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.02574920654297, latitude: 14.649100629853521},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.05939483642578, latitude: 14.65541162254194},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 120.99931335449219, latitude: 14.62983437058276},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509663941},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509615235},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509657389},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509612363},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509234543},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509123435},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509456542},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509623452},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509663456},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509634563},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509223452},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509623454},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509662345},
	{desc: "Description", time: 2013, crime: "Physical Injury",  longitude: 121.01338958740234, latitude: 14.606247509234523}

	];

module.exports.getcoordinates = function (req, res) {
	res.json(coordinates);
};

module.exports.addcoordinates = function (req, res) {
	coordinates.push(req.body);
};