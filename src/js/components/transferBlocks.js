import { useDynamicAdapt } from '../vendor/dynamicAdapt.js'

useDynamicAdapt()

document.addEventListener('DOMContentLoaded', function () {
	const infoBanners = document.querySelectorAll('.js-banner-info');

	infoBanners?.forEach((banner) => {
		const title = banner.querySelector('.js-banner-title');
		const badge = banner.querySelector('.js-banner-badge');
	
		let titleText = title.innerHTML.trim();
	
		title.innerHTML = titleText.replace(/^(\w+|[а-яА-ЯёЁ]+)/, '<span>$1</span>');

		const span = title.querySelector('span')
		span.insertBefore(badge, span.firstChild);
	});
})