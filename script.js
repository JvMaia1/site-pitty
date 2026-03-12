//1. Seleciona os elementos do HTML pelos IDs
const fotoOriginal = document.getElementById("primeira-foto"); // ID da imagem na página
const modal = document.getElementById("lightbox-modal");       // ID do fundo preto (modal)
const fotoAberta = document.getElementById("foto-modal");     // ID da imagem dentro do modal
const galeriaContainer = document.querySelector('.galeria-container'); //endereço do local onde as fotos da galeria vão ficar
const fotoPrincipal = document.getElementById("primeira-foto"); // imagem da foto principal que esta separada da galeria

let fotosGaleria = []; //lista de fotos da galeria

const totalFotosGaleria = 18; //quantidade de fotos da galeria

//Evento que detecta a foto clicada à abre
fotoPrincipal.addEventListener("click", () => {
    abrirFotoClicada(fotoPrincipal.src);
});

//Função que coloca a foto clicada no modal e a expande
function abrirFotoClicada(caminho) {
    modal.style.display = "flex";
    fotoAberta.src = caminho;
    fotoAberta.classList.add("foto-aumentada");
};

// 3. Evento para FECHAR o modal ao clicar em qualquer lugar do fundo preto
modal.addEventListener("click", function() {
    modal.style.display = "none";
});

//Colocar as fotos na galeria
for(let i = 1; i <= totalFotosGaleria; i++){
    fotosGaleria.push(`fotos/foto-${i}.webp`)
};

//selecionando cada foto em um loop, adicionando a ao html e a dando a habilidade de ela abrir
fotosGaleria.forEach(foto => {

    //criando um elemento com a foto
    const img = document.createElement('img');
    img.src = foto;
    img.alt = "foto da pitty";
    img.loading = "lazy";
    img.classList.add('foto-galeria');

    //colocando o novo elemento com a foto dentro da div '.galeria-container' no html
    galeriaContainer.appendChild(img);

    //fazendo com que a foto 'ouça' clicks e abra quando clicada
    img.addEventListener('click', () => {
        abrirFotoClicada(foto); 
    });
    //
});