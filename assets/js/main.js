var element = document.getElementById('experience');

document.body.onscroll = function () {
    var scrollY = window.scrollY;
    var section__about = document.getElementById('about');
    if (scrollY > 150) {
        section__about.classList.add('unfocused');
    } else {
        document.getElementById('about').classList.remove('unfocused');
    }

    var scaleAmt = 1 / (1 + scrollY / 2000);
    section__about.setAttribute('style', 'transform : scale(' + scaleAmt + ')');
};
