const accordions = document.querySelectorAll('.accordion')

accordions?.forEach((accordion) => {
	const btn = accordion.querySelector('.accordion__btn')

	btn.addEventListener('click', () => {
		accordions.forEach((otherAccordion) => {
      if (otherAccordion !== accordion) {
        otherAccordion.classList.remove('is-active');
      }
    });

    accordion.classList.toggle('is-active');
	})
})