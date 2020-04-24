// Vanilla JavaScript - Когда не используются ни каких оберток по верх стандартного JavaScript (jQuery использует обертки)

(function() {

  // Initialize with Vanilla JavaScript (заменить var на const) 
  const elem = document.querySelector('.products__list');
  const iso = new Isotope( elem, {
    // options
    itemSelector: '.products__item',
    filter: '.popular'
  });


  // Мой скрипт
  const controlls = document.querySelectorAll('.filter__link');
  const activeClass = "filter__item--active";

  controlls.forEach(function(control) {

    control.addEventListener('click', function(e) {
      e.preventDefault();
      
      const filterName = control.getAttribute("data-filter");

      controlls.forEach(function(link) {
        link.closest('.filter__item').classList.remove(activeClass);
      });
      
      control.closest('.filter__item').classList.add(activeClass);

      iso.arrange({
        filter: `.${filterName}`
      })
    });


  });

})();