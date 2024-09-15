contattiStrisciolina = document.getElementById("contatti_strisciolina"); 

if (window.innerWidth <= 870) {
    contattiStrisciolina.remove();
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth <= 870) {
        contattiStrisciolina.remove();
    } else if (window.innerWidth > 870) {
        document.getElementById("strisciolina").prepend(contattiStrisciolina);
    }
});