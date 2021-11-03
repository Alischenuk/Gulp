import vars from '../_vars';

if (vars.$burger) {
  vars.$burger.addEventListener('click', () => {
    vars.$nav.classList.toggle('header__list--open');
  });

  vars.$burger.addEventListener('click', () => {
    vars.$burger.classList.toggle('burger--active');
  });
}