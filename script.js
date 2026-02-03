const fotoModal = document.getElementById("foto-modal");

const primeiraFoto = document.getElementById("primeira-foto")

const modal = document.getElementById('lightbox-modal')

primeiraFoto.addEventListener("click", function(){

    fotoModal.classList.toggle("foto-aumentada")
    modal.style.display = "flex";
});

modal.addEventListener("click", function(){

    fotoModal.classList.toggle("foto-aumentada")
    modal.style.display = "none"

});

