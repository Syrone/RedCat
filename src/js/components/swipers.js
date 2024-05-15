import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs]);

const swiperMainClass = document.querySelectorAll('.swiper-main'),
			swiperCardClass = document.querySelectorAll('.swiper-card'),
			swiperRecommendedClass = document.querySelectorAll('.swiper-recommended'),
			swiperStoresClass = document.querySelectorAll('.swiper-stores'),
			swiperGalleryClass = document.querySelectorAll('.swiper-gallery')

swiperMainClass?.forEach((classSwiper) => {
	const swiper = classSwiper.querySelector('.swiper'),
				pagination = classSwiper.querySelector('.swiper-pagination')

	new Swiper(swiper, {
		slidesPerView: 1,
		grabCursor: true,

		pagination: {
			el: pagination,
			type: 'bullets',
			clickable: true,
		},
	})
})

swiperCardClass?.forEach((classSwiper) => {
	const swiper = classSwiper.querySelector('.swiper'),
				navPrev = classSwiper.querySelector('.swiper-button-prev'),
				navNext = classSwiper.querySelector('.swiper-button-next')

	new Swiper(swiper, {
		slidesPerView: 4,
		grabCursor: true,
		spaceBetween: 20,
		loop: true,

		navigation: {
			prevEl: navPrev,
			nextEl: navNext,
		},

		breakpoints: {
			0: {
				slidesPerView: 1.25,
				spaceBetween: 20
			},
			576: {
				slidesPerView: 2.25,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 3.25,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		},
	})
})

swiperRecommendedClass?.forEach((classSwiper) => {
	const swiper = classSwiper.querySelector('.swiper'),
				navPrev = classSwiper.querySelector('.swiper-button-prev'),
				navNext = classSwiper.querySelector('.swiper-button-next')

	new Swiper(swiper, {
		slidesPerView: 3,
		grabCursor: true,
		spaceBetween: 20,
		loop: true,

		navigation: {
			prevEl: navPrev,
			nextEl: navNext,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		},
	})
})

swiperStoresClass?.forEach((classSwiper) => {
	const swiper = classSwiper.querySelector('.swiper'),
				navPrev = classSwiper.querySelector('.swiper-button-prev'),
				navNext = classSwiper.querySelector('.swiper-button-next')

	new Swiper(swiper, {
		slidesPerView: 3,
		grabCursor: true,
		spaceBetween: 30,
		loop: true,

		navigation: {
			prevEl: navPrev,
			nextEl: navNext,
		},

		breakpoints: {
			0: {
				slidesPerView: 1.25,
				spaceBetween: 20
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		},
	})
})

swiperGalleryClass?.forEach((classSwiper) => {
	const swiperMainClass = classSwiper.querySelector('.swiper-main'),
				swiperThumbsClass = classSwiper.querySelector('.swiper-thumbs'),
				navPrev = classSwiper.querySelector('.swiper-button-prev'),
				navNext = classSwiper.querySelector('.swiper-button-next'),
				pagination = classSwiper.querySelector('.swiper-pagination')

	const swiperThumbs = new Swiper(swiperThumbsClass, {
		direction: 'vertical',
		slidesPerView: 3,
		grabCursor: true,
		spaceBetween: 20,
		freeMode: true,
		watchSlidesProgress: true,

		navigation: {
			prevEl: navPrev,
			nextEl: navNext,
		},
	})

	new Swiper(swiperMainClass, {
		slidesPerView: 1,
		grabCursor: true,
		spaceBetween: 30,
		thumbs: {
			swiper: swiperThumbs,
		},
		pagination: {
			el: pagination,
			clickable: true,
		}
	})
})

// Adding icons to navigation buttons
const navPrevs = document.querySelectorAll('.swiper-button-prev');
const navNexts = document.querySelectorAll('.swiper-button-next');

navPrevs?.forEach((btn) => {
	const prevIcon = document.createElement('span');
	prevIcon.classList.add('icon');
	prevIcon.innerHTML = `
		<svg>
			<use xlink:href="img/icons/swiper-arrow-left.svg#svg-swiper-arrow-left"></use>
		</svg>
	`;
	btn.appendChild(prevIcon);
});

navNexts?.forEach((btn) => {
	const nextIcon = document.createElement('span');
	nextIcon.classList.add('icon');
	nextIcon.innerHTML = `
		<svg>
			<use xlink:href="img/icons/swiper-arrow-right.svg#svg-swiper-arrow-right"></use>
		</svg>
	`;
	btn.appendChild(nextIcon);
});