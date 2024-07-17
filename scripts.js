let progr = document.querySelector('.progress');
let inp = document.getElementById('value');
let animate = document.getElementById('animate');
let hide = document.getElementById('hide');

inp.addEventListener("input", setProgress)
function setProgress() {
    console.log(progr.style)
    progr.style.background = `conic-gradient(#005CFF ${inp.value}%, #DBE6EC 0deg)`
  };

animate.addEventListener("change", animation)

function animation(){
    progr.style.animation = animate.checked ? 'spin 2s linear infinite' : ''
}

hide.addEventListener("change", hiding)

function hiding(){
    progr.style.visibility = hide.checked ? 'hidden' : 'visible';
}