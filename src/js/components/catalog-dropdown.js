const catalogDropdonws = document.querySelectorAll('.js-catalog-dropdown');

catalogDropdonws?.forEach((dropdown) => {
  const btn = dropdown.querySelector('.js-catalog-dropdown-btn');
  const content = dropdown.querySelector('.js-catalog-dropdown-content');
  
  const handleClick = (event) => {
    if (!content.contains(event.target) && !btn.contains(event.target)) {
      content.classList.remove('is-show');
    }
  };
  
  btn?.addEventListener('click', () => {
    if (content.classList.contains('is-show')) {
      content.classList.remove('is-show');
    } else {
      content.classList.add('is-show');
    }
  });
  
  document.addEventListener('click', handleClick);
});