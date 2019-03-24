
var bars = document.getElementById('bars');
var times = document.getElementById('times');
var navlist = document.getElementById('navlist');

function toggleClass() {
    navlist.classList.toggle('responsive');
    bars.classList.toggle('hidden');
    times.classList.toggle('hidden');
}

bars.addEventListener('click', toggleClass);
times.addEventListener('click', toggleClass);
