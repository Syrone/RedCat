import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs]);

const swiperMainClass = document.querySelectorAll('.swiper-main'),
			swiperCardClass = document.querySelectorAll('.swiper-card')

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

		on: {
			init: function () {
				const prevIcon = document.createElement('span');
				prevIcon.classList.add('icon');
				prevIcon.innerHTML = `
					<svg>
						<use xlink:href="img/icons/swiper-arrow-left.svg#svg-swiper-arrow-left"></use>
					</svg>
				`;

				const nextIcon = document.createElement('span');
				nextIcon.classList.add('icon');
				nextIcon.innerHTML = `
					<svg>
						<use xlink:href="img/icons/swiper-arrow-right.svg#svg-swiper-arrow-right"></use>
					</svg>
				`;

				navPrev.appendChild(prevIcon);
				navNext.appendChild(nextIcon);
			},
		},
	})

})