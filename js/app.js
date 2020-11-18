let tot = 1;

document.addEventListener("mousemove", (e) => {
    document.querySelectorAll('.parallax').forEach(parallax => {

        const speed = parallax.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/300

        const h = x.toFixed(1)
        const v = y.toFixed(1)

        parallax.style.transform = 'translate('+ h +'px, ' + v +'px)'

        // console.log(h)
    })
}, false);


window.addEventListener('mousewheel', (e) => {
    if (tot <= 2 && e.deltaY > 0) {
        tot++;
    } else if (tot >= 2 && e.deltaY < 0) {
        tot--;
    } else {}

    console.log(tot)
})


