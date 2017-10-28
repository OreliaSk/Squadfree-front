/* Init WOW */
new WOW().init();

/* FUNCTION SCROLL VERTICAL */
$(function () {
  $('li>a, a.circle').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
  });
});


/* FUNCTION SCROLLING POUR APPARITION DU BKG BLEU SUR LA BARRE DE NAVIGATION*/
let onScroll = function(){
	let elementBase = document.querySelector('body');
	let elementScroll = document.querySelector('.navbar-fixed-top');

	if (elementBase.getBoundingClientRect().top < -50) {
		elementScroll.classList.add('top-nav-collapse');
	} else {
		elementScroll.classList.remove('top-nav-collapse');
	}
}
window.addEventListener('scroll', onScroll);

