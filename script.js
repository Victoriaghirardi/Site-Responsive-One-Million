$(".container").on("click", myFunction);

function myFunction() {
  this.classList.toggle("change");
  $(".textBouton").toggleClass("show");
}

jQuery(document).ready(function() {
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 0) {
      // Si un défillement de 100 pixels ou plus.
      // Ajoute le bouton
      jQuery('#back-to-top').fadeIn(duration);
    } else {
      // Sinon enlève le bouton
      jQuery('#back-to-top').fadeOut(duration);
    }
  });
        
  jQuery('#back-to-top').click(function(event) {
    // Un clic provoque le retour en haut animé.
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
});

