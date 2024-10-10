// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"products": [
	  {
		"id": 0,
		"quantity": 0
	  }
	]
  }

const expectedResponseBody = {
	"Everything You Need": {
        "undefined": false
    },
    "Food City": {
        "undefined": false
    },
    "Big World": {
        "undefined": false
    },
    "Fresh Food": {
        "undefined": false
    }
}

test('response should be 200 OK', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;

	} catch (error) {
	console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('response body must be same as the expected response body', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();

	} catch (error) {
	console.error(error);
	}
	
// Dear reviewer the expectedResponseBody variable is declared on line 13
 expect(actualResponseBody).toEqual(expectedResponseBody);
});