window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

document.getElementById("scrollToTopBtn").onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

document.querySelector('.About-Image').addEventListener('click', function() {
    window.location.href = 'https://github.com/Quoboo';
});

document.querySelector('.wblogo').addEventListener('click', function() {
    window.location.href = 'https://github.com/CoasterFreakDE/Citybuild';
});

document.querySelector('.anidash').addEventListener('click', function() {
    window.location.href = 'https://github.com/Anidashcom';
});

document.querySelector('.lumania').addEventListener('click', function() {
    window.location.href = 'https://github.com/Lumania-net';
});

document.querySelector('.html5').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/HTML5';
});

document.querySelector('.css3').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Cascading_Style_Sheets';
});

document.querySelector('.js').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/JavaScript';
});

document.querySelector('.java').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Java_(Programmiersprache)';
});

document.querySelector('.bootstrap').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Bootstrap_(Framework)';
});

document.querySelector('.react').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/React';
});

document.querySelector('.nodejs').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Node.js';
});

document.querySelector('.nginx').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Nginx';
});

document.querySelector('.linux').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Linux';
});

document.querySelector('.cloudflare').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Cloudflare';
});

document.querySelector('.db').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Datenbanksprache';
});

document.querySelector('.docker').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Docker_(Software)';
});

document.querySelector('.blender').addEventListener('click', function() {
    window.location.href = 'https://de.wikipedia.org/wiki/Blender_(Software)';
});