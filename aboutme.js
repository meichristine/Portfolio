document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');

    const checkPosition = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // initial check
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

function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
  } else {
      dropdown.style.display = "block";
  }
}

var scrollEventhandler = function ()
{
    window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventhandler, false);