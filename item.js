document.getElementById('myElement').addEventListener('touchstart', function() {
    this.style.transform = 'scale(1.1)';
});


document.getElementById('myElement').addEventListener('touchend', function() {
    this.style.transform = 'scale(1)';
});