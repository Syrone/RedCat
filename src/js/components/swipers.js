import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs]);

const swiperMainClass = document.querySelectorAll('.swiper-main')

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