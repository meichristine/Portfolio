document.querySelector('.netflix-intro').addEventListener('transitionend', (event) => {
    if (event.propertyName === 'opacity') {
        window.location.href = "index.html"; // Redirect to index.html
    }
});

// Trigger the fade-out after a delay
setTimeout(() => {
    document.querySelector('.netflix-intro').classList.add('fade-out');
}, 4000); // Duration to display the letters before fading out