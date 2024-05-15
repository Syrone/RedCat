const videoWrappers = document.querySelectorAll('.js-video')

videoWrappers?.forEach((wrapper) => {
	const video = wrapper.querySelector('video')

	wrapper.addEventListener('click', () => {
		wrapper.classList.toggle('is-show');
		video.toggleAttribute('controls');
	});
})