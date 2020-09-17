'use strict';

module.exports = handler => event => {
	// Remove undefined values so the lambda can safely destructure input
	const cleanedEvent = Object.fromEntries(
		Object.entries(event).filter(([key, value]) => Boolean(value))
	);

	console.info(cleanedEvent);

	return (
		handler(cleanedEvent)
			.catch(error =>
				error.statusCode && error.body ? error : console.error(error)
			)
			// Always return a JSON body
			.then(({ statusCode, body }) => ({
				statusCode,
				body: JSON.stringify(body),
			}))
	);
};
