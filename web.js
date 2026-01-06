let listaMensagens = [
    "A natureza sempre encontra um jeito.",
    "O silêncio da floresta fala mais que mil palavras.",
    "Cada árvore já foi uma semente.",
    "A paz está no som do vento.",
    "Cuidar da natureza é cuidar de si mesmo.",
    "A natureza não tem pressa, mas tudo acontece.",
    "Respire fundo: a natureza está viva.",
    "A simplicidade da natureza ensina grandes lições.",
    "Onde há natureza, há equilíbrio.",
    "A terra nos dá tudo, basta respeitá-la.",
    "A beleza natural não precisa de filtros.",
    "A natureza renova a alma.",
    "Ouça a natureza e encontre a calma.",
    "O verde acalma o coração.",
    "Preservar hoje é viver amanhã.",
    "A natureza é arte viva.",
    "Cada amanhecer é um presente da natureza.",
    "A harmonia está no natural.",
    "A força da vida vem da terra.",
    "A natureza é a maior professora."
];

const btnMensagem = document.getElementById("btnMensagem");
const textoMensagem = document.getElementById("textoMensagem");

if (btnMensagem) {
    btnMensagem.addEventListener("click", function () {
        let i = Math.floor(Math.random() * listaMensagens.length);
        textoMensagem.textContent = listaMensagens[i];
    });
}



let curiosidades = [
    "Uma árvore pode viver mais de 100 anos.",
    "As florestas ajudam a limpar o ar que respiramos.",
    "O Brasil abriga uma das maiores biodiversidades do mundo.",
    "Plantas também respiram, principalmente à noite.",
    "A água é essencial para toda forma de vida.",
    "As abelhas são fundamentais para a polinização.",
    "Os oceanos produzem mais da metade do oxigênio do planeta.",
    "As árvores ajudam a reduzir a temperatura das cidades.",
    "A Amazônia é a maior floresta tropical do mundo.",
    "Algumas plantas conseguem sobreviver em ambientes extremos.",
    "A natureza funciona em equilíbrio perfeito.",
    "As florestas ajudam a regular o clima.",
    "A chuva faz parte do ciclo natural da vida.",
    "Sem a natureza, a vida humana não existiria.",
    "A preservação garante o futuro do planeta."
];

const btnCuriosidades = document.getElementById("Curiosidades");
const textoCuriosidade = document.getElementById("textoCuriosidade");

if (btnCuriosidades) {
    btnCuriosidades.addEventListener("click", function () {
        let i = Math.floor(Math.random() * curiosidades.length);
        textoCuriosidade.textContent = curiosidades[i];
    });
}