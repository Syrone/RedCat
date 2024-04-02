const searchWrappers = document.querySelectorAll('.js-search');

searchWrappers.forEach((wrapper) => {
  const form = wrapper.querySelector('.js-search-form');
  const btn = wrapper.querySelector('.js-search-btn');

  btn.addEventListener('click', () => {
    form.classList.toggle('is-active');
  });

  document.addEventListener('click', (event) => {
    if (!form.contains(event.target) && !event.target.closest('.js-search')) {
      form.classList.remove('is-active');
    }
  });
});