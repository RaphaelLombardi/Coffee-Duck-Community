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
    p45: "O perigo das Fake News para a educação nutricional",
    p46: "Os Benefícios de uma Alimentação Natural e os Prejuízos dos Alimentos Industrializados",
    p47: "Como Nossa Dieta Pode Mudar o Nosso Cérebro",
    p48: "Revolução no Prato: Como a Geração Z Está Redefinindo o 'Fast-Food' com Ingredientes Naturais",
    p49: "Alunos melhoram desempenho escolar com merenda mais saudável",
    p50: "Receitas da vovó voltam à moda com um toque saudável",
    p51: "Restaurantes e escolas reduzem desperdício de alimentos em 40% com novas iniciativas",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    p45: "The danger of Fake News for nutritional education",
    p46: "The Benefits of Natural Food and the Harms of Industrialized Foods",
    p47: "How Our Diet Can Change Our Brain",
    p48: "Revolution on the Plate: How Generation Z Is Redefining 'Fast Food' with Natural Ingredients",
    p49: "Students improve school performance with healthier snacks",
    p50: "Grandma's recipes are back in fashion with a healthy touch",
    p51: "Restaurants and schools reduce food waste by 40% with new initiatives",
};


    console.log(swapBtn)
    console.log(themeBtn)
    

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
    document.getElementById("p45").textContent = textos.p45;
    document.getElementById("p46").textContent = textos.p46;
    document.getElementById("p47").textContent = textos.p47;
    document.getElementById("p48").textContent = textos.p48;
    document.getElementById("p49").textContent = textos.p49;
    document.getElementById("p50").textContent = textos.p50;
    document.getElementById("p51").textContent = textos.p51;
});