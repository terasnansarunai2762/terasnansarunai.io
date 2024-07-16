document.addEventListener('DOMContentLoaded', function() {
  const carouselItems = document.querySelectorAll('.carousel-item');

  function showNextSlide() {
    const activeItem = document.querySelector('.carousel-item.active');

    activeItem.classList.remove('active');

    let nextItem = activeItem.nextElementSibling;
    if (!nextItem) {
      nextItem = carouselItems[0];
    }

    nextItem.classList.add('active');
  }

  setInterval(showNextSlide, 3000);
});