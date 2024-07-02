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

window.onscroll = function() {scrollIndicator()};

function scrollIndicator() {
  var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator").style.display = "block";
  document.getElementById("scrollIndicator").style.opacity = "1";
  document.getElementById("scrollIndicator").querySelector(".indicator").style.width = scrolled + "%";
}