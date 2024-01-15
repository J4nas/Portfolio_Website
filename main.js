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

document.querySelector('.lumanialogo').addEventListener('click', function() {
    window.location.href = 'https://github.com/Lumania-net';
});

document.querySelector('.devunitlogo').addEventListener('click', function() {
    window.location.href = 'https://github.com/DevUnit-DE';
});

const data = [
    { language: 'Java', percent: 20 }, //#ec8e58
    { language: 'JavaScript', percent: 65 }, //#ecc858
    { language: 'HTML5', percent: 72 }, //#ec5858
    { language: 'CSS3', percent: 55 }, //#5890ec
    { language: 'React', percent: 51 }, //#58d6ec
    { language: 'Bootstrap', percent: 18 }, //#9b58ec
    { language: 'Go', percent: 13 }, //#c4ec58
    { language: 'Python', percent: 14 }, //#ea58ec
    { language: 'Rust', percent: 10 }, //#f7eef7
    { language: 'Datenbanksprachen', percent: 43 } //#58ec63
];

const width = 330;
const height = 330;
const radius = Math.min(width, height) / 2;

const color = d3.scaleOrdinal()
    .range(['#ec8e58', '#ecc858', '#ec5858', '#5890ec', '#58d6ec', '#9b58ec', '#c4ec58', '#ea58ec', '#fffefe', '#58ec63']);

const svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

const pie = d3.pie()
    .value(d => d.percent);

const path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

const arc = svg.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d", path)
    .attr("fill", d => color(d.data.language));