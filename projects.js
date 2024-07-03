/* Horizontal Scroll Stopper */
var scrollEventhandler = function ()
{
    window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventhandler, false);

window.onscroll = function() {scrollIndicator()};

/* Scroll Indicator */
function scrollIndicator() {
  var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator").style.display = "block";
  document.getElementById("scrollIndicator").style.opacity = "1";
  document.getElementById("scrollIndicator").querySelector(".indicator").style.width = scrolled + "%";
}

document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.slide-in');

  const appearOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              return;
          } else {
              entry.target.classList.add('visible');
              appearOnScroll.unobserve(entry.target);
          }
      });
  }, appearOptions);

  sliders.forEach(slider => {
      appearOnScroll.observe(slider);
  });
});
