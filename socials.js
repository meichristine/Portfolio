function stars() {
    let e = document.createElement("div");
    e.setAttribute("class", "star");
    document.querySelector(".sidenav").appendChild(e);
    e.style.left = Math.random() * innerWidth + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size+'px';
    e.style.animationDuration = 2 + duration+'s';

    setTimeout(function () {
      document.querySelector(".sidenav").removeChild(e);
    }, 5000);
  }

  setInterval(() => {
    stars();
  }, 100);