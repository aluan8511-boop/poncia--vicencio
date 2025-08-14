function showInfo(type) {
    const infoDiv = document.getElementById('info');
    let content = '';

    switch(type) {
        case 'resenha':
            content = `<h2>Resenha Crítica</h2>
                       <p>A história de Ponciá Vicêncio descreve os caminhos, as andanças, as marcas, os sonhos e os desencantos da protagonista. A autora traça a trajetória da personagem da infância à idade adulta, analisando seus afetos e desafetos e seu envolvimento com a família e os amigos. Discute a questão da identidade de Ponciá, centrada na herança identitária do avô e estabelece um diálogo entre o passado e o presente, entre a lembrança e a vivência, entre o real e o imaginado.</p>`;
            break;
        case 'entrevista':
            content = `<h2>Entrevista com Conceição Evaristo</h2>
                       <p>Nascida em Belo Horizonte em 29 de novembro de 1946, a menina negra e pobre cresceu rodeada de palavras. Conceição Evaristo conta que escrever a ajudou a encarar o racismo que viveu enquanto adolescente e, depois, como mulher negra na sociedade brasileira.</p>`;
            break;
        case 'literatura':
            content = `<h2>Literatura Afro-Brasileira</h2>
                       <p>A literatura negra brasileira é uma expressão artística e política que dá voz e visibilidade a uma parcela significativa da população que foi historicamente marginalizada. A valorização dessa literatura é essencial para combater o racismo estrutural e construir uma sociedade mais igualitária.</p>`;
            break;
        case 'estudo':
            content = `<h2>Estudo Acadêmico sobre Ponciá Vicêncio</h2>
                       <p>Este artigo aborda a novela de Conceição Evaristo, refletindo sobre Memória e Ficción. A narrativa está constituída por elementos interconectados pelas memórias de Ponciá, explorando a condição do negro no Brasil e temas como identidade, racismo e ancestralidade.</p>`;
            break;
        default:
            content = '<p>Nenhuma informação disponível.</p>';
    }

    infoDiv.innerHTML = content;
    infoDiv.style.display = 'block'; // Show the info section
}
