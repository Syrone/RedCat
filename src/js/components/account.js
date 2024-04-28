const accountAside = document.querySelector('.js-account-aside'),
			accountMain = document.querySelector('.js-account-main'),
			accountAsideBtns = document.querySelectorAll('.js-btn-account-aside'),
			accountMainBtns = document.querySelectorAll('.js-btn-account-main')

accountAsideBtns?.forEach((btn) => {
	btn.addEventListener('click', function() {
		accountMain?.classList.remove('is-show')
		accountAside?.classList.add('is-show')
	})
})

accountMainBtns?.forEach((btn) => {
	btn.addEventListener('click', function() {
		accountAside?.classList.remove('is-show')
		accountMain?.classList.add('is-show')
	})
})