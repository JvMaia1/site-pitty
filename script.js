// 1. Seleciona os elementos do HTML pelos IDs corretos
const fotoOriginal = document.getElementById("primeira-foto"); // ID da imagem na página
const modal = document.getElementById("lightbox-modal");      // ID do fundo preto (modal)
const fotoNoModal = document.getElementById("foto-modal");    // ID da imagem dentro do modal

const fotoPrincipal = document.getElementById("primeira-foto");
fotoPrincipal.addEventListener("click", () => {
    configurarModal(fotoPrincipal.src);
});

function configurarModal(caminho) {
    modal.style.display = "flex";
    fotoNoModal.src = caminho;
    fotoNoModal.classList.add("foto-aumentada");
}

// 2. Evento para ABRIR o modal ao clicar na foto da Pitty
fotoOriginal.addEventListener("click", function() {
    modal.style.display = "flex";          // Mostra o fundo
    fotoNoModal.src = fotoOriginal.src;    // Garante que a foto do modal é a mesma que foi clicada
    fotoNoModal.classList.add("foto-aumentada");
});

// 3. Evento para FECHAR o modal ao clicar em qualquer lugar do fundo preto
modal.addEventListener("click", function() {
    modal.style.display = "none";
});

//Colocar as fotos na galeria

let fotosGaleria = ["fotos/foto-1.jpg", "fotos/foto-2.jpg", "fotos/foto-3.jpg", "fotos/foto-4.jpg", "fotos/foto-5.jpg", "fotos/foto-6.jpg", "fotos/foto-7.jpg", "fotos/foto-8.jpg", "fotos/foto-9.jpg", "fotos/foto-10.jpg", "fotos/foto-11.jpg", "fotos/foto-12.jpg", "fotos/foto-13.jpg", "fotos/foto-14.jpg", "fotos/foto-15.jpg", "fotos/foto-16.jpg", "fotos/foto-17.jpg", "fotos/foto-18.jpg"]

const galeriaContainer = document.querySelector('.galeria-container');


fotosGaleria.forEach(foto => {
    const img = document.createElement('img');
    img.src = foto;
    img.alt = "foto da pitty";
    img.classList.add('foto-galeria');
    img.addEventListener('click', () => {
        configurarModal(foto); 
    });
    galeriaContainer.appendChild(img);
});