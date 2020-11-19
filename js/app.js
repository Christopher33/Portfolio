const animations = document.querySelectorAll('.parallax')

let tot = 1;

document.addEventListener("mousemove", (e) => {
    document.querySelectorAll('.parallax').forEach(parallax => {

        const speed = parallax.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/300

        const h = x.toFixed(1)
        const v = y.toFixed(1)

        parallax.style.transform = 'translate('+ h +'px, ' + v +'px)'

    })
}, false);


window.addEventListener('mousewheel', (e) => {
    if (tot <= 2 && e.deltaY > 0) {
        tot++;
        animate(tot);
    } else if (tot >= 2 && e.deltaY < 0) {
        tot--;
        animate(tot);
    } else {}

    console.log(tot)
})


function animate(t) {
    if(t == 1) {
        console.log("page 1")
        animations.forEach( (animation) => {
            animation.classList.remove("up")
            animation.classList.add("down")
        })
    } else if(t == 2) {
        console.log("page 2")        
        animations.forEach( (animation) => {
            animation.classList.remove("down")
            animation.classList.add("up")
        })
    } else if(t ==3) {
        console.log("page 3")        
    }
}