document.documentElement.className += 'ontouchstart' in document.documentElement ? ' touch' : ' no-touch';

if ('ontouchstart' in document.documentElement) {
    document.querySelectorAll('.experience__works').forEach((element) => {
        element.classList.add('touch');
    });
    document.querySelectorAll('.experience__job').forEach((element) => {
        element.classList.add('touch');
    });
} else {
    document.querySelectorAll('.experience__works').forEach((element) => {
        element.classList.add('no-touch');
    });
    document.querySelectorAll('.experience__job').forEach((element) => {
        element.classList.add('no-touch');
    });
}
