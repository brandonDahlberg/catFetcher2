const request = require('request');

const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
	if (error) {
		console.log(error, null);
	} else {
		console.log(null, desc);
	}
});
