// eslint-disable-next-line no-undef
const config = require('../config');

//Dear reviewer I used this variable in my expect matcher on line 41. Is this still incorrect?
const expectedResponseBody =  [
	{
		"id": 1,
		"name": "For the situation"
	},
	{
		"id": 2,
		"name": "Prepare a dish"
	
	}
	]

test('response should get 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


test('responseBody should contains list of all the cards', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	

	expect(actualResponseBody).toEqual(expectedResponseBody);
});