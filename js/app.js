const pageOne = document.getElementById('one')
const pageTwo = document.getElementById('two')
const pageThree = document.getElementById('three')
const portfolio = document.querySelector('.portfolio')
const animations = document.querySelectorAll('.lamp')
const box_doc = document.querySelector('.box_doc')
const big_lamp = document.querySelector('.big_lamp')
const shadow = document.querySelector('.doc2')
const about = document.querySelector('.about')
const body = document.querySelector('.new-body')
const paper = document.querySelector('.place_paper')
const glass = document.querySelector('.glass')
const about_me = document.querySelector('.about_me')

let tot = 1
let i = 0
let width
let lastY
let y = 0

// __________________________Mouving light first page______________________
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll('.lamp').forEach(parallax => {

        const speed = parallax.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/300

        const h = x.toFixed(1)
        const v = y.toFixed(1)

        parallax.style.transform = 'translate('+ h +'px, '+ v +'px)'
    })
}, false);

// _________________________Listener for responsive_________________________
window.addEventListener('resize', (e) => {
    width = e.currentTarget.innerWidth / 2.12
    body.style.height = width + 'px'
})

function windowSizeFirst() {
    let i = window.innerWidth / 2.12
    body.style.height = i + 'px'    
}

windowSizeFirst()

// __________________________function onClick_______________________________
function showPaper() {
    paper.style.right = 0 + '%'
    glass.style.backdropFilter = 'blur(10px)'
    tot = 11
}

function closePaper() {
    paper.style.right = -70 + '%'
    glass.style.backdropFilter = 'blur(0px)'
    tot = 2
}

// ___________________________________counting page___________________________
window.addEventListener('wheel', (e) => {
    onScroll(e)
})


function onScroll(e) {

    if( y === 0){

        if(tot === 11) {
            tot = 11
        } 
        else if (tot <= 2 && e.deltaY > 0) {
            tot++
            animate(tot)
            y = 1
        } else if (tot >= 2 && e.deltaY < 0) {
            tot--
            animate(tot)
            y = 1
        }        
        
    } else { }
}

window.addEventListener('touchmove', (e) => {

    let i = e.touches[0].clientY;
    let currentY = Math.round(i / 100) * 100

    if( y === 0){

        if(tot === 11){
            tot = 11
        }
        else if(tot <= 2 && currentY > lastY){
            tot++
            animate(tot)
            y = 1
        }else if(tot >= 2 && currentY < lastY){
            tot--
            animate(tot)
            y = 1
        }
        lastY = currentY;

    } else { }
})


// _____________________________function animation pages________________________
function animate(t) {
    if(t == 1) {

        animations.forEach( (animation) => {
            animation.classList.remove("up")
            animation.classList.add("down")
        })
        pageTwo.classList.remove("openCross")
        portfolio.classList.remove("P_folio_back")
        big_lamp.classList.remove("left")
        box_doc.classList.remove("right")
        shadow.classList.remove("doc")
        
        pageOne.classList.add("openCross")
        shadow.classList.add("doc_back")
        big_lamp.classList.add("left_back")
        box_doc.classList.add("right_back")    
        portfolio.classList.add("P_folio")
        
    } else if(t == 2) {

        animations.forEach( (animation) => {
            animation.classList.remove("down")
            animation.classList.add("up")
        })
        pageOne.classList.remove("openCross")
        pageThree.classList.remove("openCross")
        portfolio.classList.remove("P_folio")
        big_lamp.classList.remove("left_back")
        box_doc.classList.remove("right_back")
        shadow.classList.remove("doc_back")
        about.classList.remove("ani_about")
        about_me.classList.remove("look")
        
        pageTwo.classList.add("openCross")
        portfolio.classList.add("P_folio_back")
        big_lamp.classList.add("left")
        box_doc.classList.add("right")
        shadow.classList.add("doc")
        
        if( i >= 1 ) {
            about.classList.add("ani_about_back")
        }
        i++;
        
    } else if(t ==3) {
        
        pageTwo.classList.remove("openCross")
        big_lamp.classList.remove("left")
        box_doc.classList.remove("right")
        shadow.classList.remove("doc")
        about.classList.remove("ani_about_back")
        
        pageThree.classList.add("openCross")
        shadow.classList.add("doc_back")
        big_lamp.classList.add("left_back")
        box_doc.classList.add("right_back")
        about.classList.add("ani_about")
        about_me.classList.add("look")
    }

    setTimeout( () => {
        y = 0
    }, 1000)
}


