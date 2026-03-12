<img width="1040" height="973" alt="Screenshot_1" src="https://github.com/user-attachments/assets/a33896de-9fcc-4ba6-a728-f41043b248e1" />

# 🐾 Santuário da Pitty - Projeto de Memória e Aprendizado

Este projeto é uma homenagem à minha companheira Pitty (2014-2025). Desenvolvido como parte dos meus estudos em **Desenvolvimento Full Stack**, o objetivo, antes de tudo, foi transformar a saudade em algo construtivo, lidando com o luto da sua partida em dezembro de 2025 através do código.

Ao longo dessa jornada, consolidei meus conhecimentos em HTML e CSS e, através dos estudos de **JavaScript no Senac Penha**, pude entender como criar uma experiência visual leve, fluida e dinâmica, aplicando boas práticas de performance e manipulação de elementos (DOM).

## 🚀 Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação focada em acessibilidade e organização.
* **CSS3 Moderno:** Uso de Variáveis (Custom Properties), Flexbox e CSS Grid.
* **JavaScript (Vanilla):** Lógica para geração dinâmica de galeria e implementação de um Lightbox nativo (sem bibliotecas externas).
* **Otimização de Assets:** Conversão e compressão de imagens para o formato **WebP**.

## 💡 Desafios Técnicos & Aprendizados

### 1. Performance de Imagens
Trabalhar com 20 fotos de alta resolução exigiu uma estratégia real de otimização para não comprometer a experiência do usuário.

* **Antes:** A pasta original passava de **35MB**.
* **Depois:** Com a conversão para WebP e redimensionamento, o peso total caiu para **3.87MB**, garantindo um carregamento rápido e um excelente **LCP (Largest Contentful Paint)**.
* Uso de `loading="lazy"` para carregamento sob demanda.

### 2. Manipulação de DOM Dinâmica
Em vez de declarar cada imagem manualmente no HTML, utilizei um loop em JavaScript para injetar as fotos no container da galeria. Isso torna o código escalável e muito mais fácil de manter.

```javascript
// Lógica de automação da galeria
for(let i = 1; i <= totalFotosGaleria; i++){
    fotosGaleria.push(`fotos/foto-${i}.webp`);
}
