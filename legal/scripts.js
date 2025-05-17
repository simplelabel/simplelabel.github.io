const container = document.querySelector('.details-group');

// Close all other details when one is shown
container.addEventListener('sl-show', event => {
	if (event.target.localName === 'sl-details') {
		[...container.querySelectorAll('sl-details')].map(details => (details.open = event.target === details));
	}
});