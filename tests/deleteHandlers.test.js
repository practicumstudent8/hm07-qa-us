// eslint-disable-next-line no-undef
const config = require('../config');

test('response should be 200', async () => {
	let actualStatusCode;
    try
	 {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});
test('expected response body to be ok true', async () => {
	let actualResponseBody;
    try
	 {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toHaveProperty('ok', true);
});
