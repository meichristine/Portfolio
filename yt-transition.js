document.querySelector('.netflix-intro').addEventListener('transitionend', (event) => {
    if (event.propertyName === 'opacity' && event.target.classList.contains('fade-out')) {
        window.location.href = "channel.html";
    }
});

// Trigger the You animation
setTimeout(() => {
    document.querySelector('#you-group').classList.add('fade-in');
}, 1000); // Adjust this timing if needed

// Trigger the Tube animation
setTimeout(() => {
    document.querySelector('#tube-group').classList.add('fade-in');
}, 2000); // Adjust this timing if needed

// Trigger the shake and progress bar loading
setTimeout(() => {
    document.querySelector('.netflix-intro').classList.add('shake');
    document.querySelector('.progress-bar').classList.add('load');
}, 3000); // Adjust this timing if needed

// Trigger the fade-out after progress bar completes
setTimeout(() => {
    document.querySelector('.netflix-intro').classList.add('fade-out');
    document.querySelector('.progress-bar').classList.add('fade-out');
}, 6000); // Adjust this timing if needed