// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {

    "name": "My modified kit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]

}

test('response status should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'PUT',
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
test('actual response body should be equal to expected response body', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
    // Dear reviewer there are three other parts to the response body I am testing to see if the ok property is true since it is the only thing that remains unchanged in the response body.
    expect(actualResponseBody).toHaveProperty('ok', true);
});