const swapBtn = document.getElementById('swap');
let isEnglish = false;

const themeBtn = document.getElementById('theme')

const textosPT = {
    hmenuitem1: "Início",
    hmenuitem2: "Matérias",
    hmenuitem3: "Quiz",
    hmenuitem4: "Sobre Nós",
    hmenuitem5: "Contato",
    botao: "PT-BR",
    botao2: "Tema",
    p56: "Sobre nós",
    p57: "A Comunidade do Café com Pato surgiu como a proposta do trabalho anual do componente curricular Projeto Integrador I, primeiramente lecionado por Prof. Dr. Humberto Fioravante Ferro e pelo Prof. Me. Alexandre Rodrigues Monge; o trabalho tem como objetivo estar direcionado a um tema transversal do IFPR e apresentar os conteúdos do curso técnico de informática por meio de um site com este tema. O tema abordado é: A Educação Alimentar, desenvolvido a partir de outros temas como a autonomia, a sustentabilidade e o trabalho coletivo.",
    p58: "Integrantes",
    p59: "João Manoel Ramão Tomin",
    p60: "Curso: IIW25A",
    p61: "João Manoel, 14 anos, apelido: Pato, inspirou ao nosso mascote por conta de seu apelido carinhoso. Escritor, e quem propôs a ideia inicial do projeto. Acesse o currículo Lattes pelo link abaixo:",
    p62: "Julia Horing Saar",
    p63: "Curso: IIW25A",
    p64: "Julia, 16 anos, é a principal designer do projeto, projetou a identidade visual do site, paletas de cores e os mascotes. Acesse Seu currículo Lattes abaixo:",
    p65: "Raphael Lombardi de Mello Norbiato",
    p66: "Curso: IIW25A",
    p67: "Raphael, 15 anos, é o principal programador do projeto, responsável pela divisão de tarefas e das páginaa, além da estruturação do repositório no GitHub. Acesse o currículo Lattes abaixo",

};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    p56: "About us",
    p57: "The Coffee Duck Community emerged as the annual project for the Integrative Project I curricular component, initially taught by Prof. Dr. Humberto Fioravante Ferro and Prof. Me. Alexandre Rodrigues Monge; the project aims to address a cross-curricular theme of IFPR (Federal Institute of Paraná) and present the contents of the computer science technical course through a website on this theme. The theme addressed is: Food Education, developed from other themes such as autonomy, sustainability, and collective work.",
    p58: "Members",
    p59: "João Manoel Ramão Tomin",
    p60: "Course: IIW25A",
    p61: "João Manoel, 14 years old, nickname: Pato, inspired our mascot because of his affectionate nickname. He is a writer and the one who proposed the initial idea for the project. Access his Lattes curriculum through the link below:",
    p62: "Julia Horing Saar",
    p63: "Course: IIW25A",
    p64: "Julia, 16 years old, is the lead designer on the project; she designed the website's visual identity, color palettes, and mascots. Access her Lattes curriculum below:",
    p65: "Raphael Lombardi de Mello Norbiato",
    p66: "Course: IIW25A",
    p67: "Raphael, 15 years old, is the main programmer of the project, responsible for dividing tasks and pages, as well as structuring the repository on GitHub. Access his Lattes curriculum below.",
};

swapBtn.addEventListener("click", () => {
    isEnglish = !isEnglish;

    const textos = isEnglish ? textosEN : textosPT

    swapBtn.textContent = textos.botao;
    themeBtn.textContent = textos.botao2;
    document.getElementById("hmenuitem1").textContent = textos.hmenuitem1;
    document.getElementById("hmenuitem2").textContent = textos.hmenuitem2;
    document.getElementById("hmenuitem3").textContent = textos.hmenuitem3;
    document.getElementById("hmenuitem4").textContent = textos.hmenuitem4;
    document.getElementById("hmenuitem5").textContent = textos.hmenuitem5;
    document.getElementById("p56").textContent = textos.p56;
    document.getElementById("p57").textContent = textos.p57;
    document.getElementById("p58").textContent = textos.p58;
    document.getElementById("p59").textContent = textos.p59;
    document.getElementById("p60").textContent = textos.p60;
    document.getElementById("p61").textContent = textos.p61;
    document.getElementById("p62").textContent = textos.p62;
    document.getElementById("p63").textContent = textos.p63;
    document.getElementById("p64").textContent = textos.p64;
    document.getElementById("p65").textContent = textos.p65;
    document.getElementById("p66").textContent = textos.p66;
    document.getElementById("p67").textContent = textos.p67;
});