const choices = document.querySelectorAll('.js-card-choices'),
	wrapPictures = document.querySelectorAll('.js-card-pictures')

wrapPictures?.forEach((wrap) => {
	const pictures = wrap.querySelectorAll('picture')

	pictures?.forEach((picture) => {
		picture.style.display = 'none'
	})
})

choices?.forEach((choice, choiceIndex) => {
	const inputs = choice.querySelectorAll('input[type="radio"]')

	inputs?.forEach((input, inputIndex) => {
		input.setAttribute('name', `otherChoice${choiceIndex}`);

		if (input.checked) {
			const wrap = wrapPictures[choiceIndex];
			const pictures = wrap.querySelectorAll('picture');

			pictures?.forEach((picture, pictureIndex) => {
				if (pictureIndex === inputIndex) {
					picture.style.display = 'unset';
				} else {
					picture.style.display = 'none';
				}
			});
		}

		input.addEventListener('change', () => {
			const wrap = wrapPictures[choiceIndex];
			const pictures = wrap.querySelectorAll('picture');

			pictures?.forEach((picture, pictureIndex) => {
				if (pictureIndex === inputIndex) {
					picture.style.display = 'unset';
				} else {
					picture.style.display = 'none';
				}
			});
		});
	})

})