const request = require('request');
const breed = process.argv[2];
const api = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = function (breedName, callback) {
	request(`${api}${breedName}`, (error, response, body) => {
		if (error) {
			callback(error, null);
		}
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		const data = JSON.parse(body);
		const description = data[0].description;
		callback(null, description);
	});
};

module.exports = { fetchBreedDescription };

// const fetchBreedDescription = function (breedName, callback) {
// 	request(`${api}${breedName}`, (error, response, body) => {
// 		if (error) {
// 			callback(error, null);
// 		}
// 		const data = JSON.parse(body);
// 		const description = data[0].description;
// 		callback(null, description);
// 	});
// };
