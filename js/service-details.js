const serviceCards = document.querySelectorAll('.service-card');
const colMd6 = document.querySelectorAll('.col-md-6');

colMd6.forEach(function(col) {
  col.addEventListener('mouseenter', function() {
    serviceCards.forEach(function(card) {
      card.classList.add('expanded');
    });
  });
  
  col.addEventListener('mouseleave', function() {
    serviceCards.forEach(function(card) {
      card.classList.remove('expanded');
    });
  });
});
