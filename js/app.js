document.addEventListener("mousemove", move);
function move(e) {
    this.querySelectorAll('.parallax').forEach(parallax => {

        const speed = parallax.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100

        const h = x.toFixed(1);

        parallax.style.transform = 'translateX('+ h +'px)'

        // console.log(h)
    })
}