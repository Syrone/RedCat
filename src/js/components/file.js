const files = document.querySelectorAll('.file')

files?.forEach((el) => {
	const input = el.querySelector('.file__input');
	const fileName = el.querySelector('.file__name');

	input.addEventListener('change', function () {
		if (input.files.length > 0) {
			fileName.textContent = input.files[0].name;
			el.classList.add('is-select');
		} else {
			fileName.textContent = 'Файл не выбран';
			el.classList.remove('is-select');
		}
	});
})