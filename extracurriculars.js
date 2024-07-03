document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in');

    const handleScroll = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the function once on page load
    handleScroll();
});

/* Fade Transition */
document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in-on-scroll');
    
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('fade-in-visible');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);
    
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  

/* Scroll Indicator */
window.onscroll = function() {scrollIndicator()};

function scrollIndicator() {
  var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator").style.display = "block";
  document.getElementById("scrollIndicator").style.opacity = "1";
  document.getElementById("scrollIndicator").querySelector(".indicator").style.width = scrolled + "%";
}

/* Lock Horiztonal Scroll */
var scrollEventhandler = function ()
{
    window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventhandler, false);