const fs = require('fs');
const path = require('path');

// Caminho da pasta fotos
const pastaFotos = path.join(__dirname, 'fotos');

// Ler todos os arquivos da pasta
fs.readdir(pastaFotos, (err, arquivos) => {
    if (err) {
        console.error('Erro ao ler a pasta:', err);
        return;
    }

    // Filtrar apenas imagens
    const extensoesValidas = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const fotos = arquivos
        .filter(arquivo => extensoesValidas.includes(path.extname(arquivo).toLowerCase()))
        .map(arquivo => `fotos/${arquivo}`)
        .sort();

    // Exibir o array no console
    console.log('let fotosGaleria = [');
    fotos.forEach((foto, index) => {
        const virgula = index < fotos.length - 1 ? ',' : '';
        console.log(`    "${foto}"${virgula}`);
    });
    console.log('];');

    // Também salvar em um arquivo
    const conteudo = `let fotosGaleria = [\n${fotos.map(foto => `    "${foto}"`).join(',\n')}\n];\n`;
    fs.writeFileSync('fotos-array.js', conteudo);
    console.log('\n✓ Array salvo em fotos-array.js');
});
