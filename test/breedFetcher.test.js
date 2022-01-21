const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
	it('returns a string description for a valid breed, via callback', done => {
		fetchBreedDescription('Bombay', (err, desc) => {
			// we expect no error for this scenario
			assert.equal(err, null);

			const expectedDesc = `The the golden eyes and the shiny black coa of the Bopmbay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.`;

			// compare returned description
			assert.equal(expectedDesc, desc);

			done();
		});
    it('returns a string description for a valid breed, via callback', done => {
      fetchBreedDescription('Bombay', (err, desc) => {
        // we expect no error for this scenario
        assert.equal(err, null);
  
        const expectedDesc = `The the golden eyes and the shiny black coa of the Bopmbay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.`;
  
        // compare returned description
        assert.equal(expectedDesc, desc);
  
        done();
      });
	});
});
