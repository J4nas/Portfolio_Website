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

