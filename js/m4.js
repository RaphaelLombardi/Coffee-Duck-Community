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
    p1: "Revolução no Prato: Como a Geração Z Está Redefinindo o ''Fast-Food'' com Ingredientes Naturais",
    p2: "Julia Horing - 21/10/2025",
    p3: "São Paulo - Esqueça a imagem de lanches gordurosos e ultraprocessados. Uma nova onda de empreendedorismo jovem está transformando o conceito de comida rápida no Brasil, provando que é possível unir a praticidade do fast-food com os benefícios de uma alimentação saudável e natural. Com um mercado de alimentos saudáveis em franca expansão (previsão de crescimento de 27% até 2025), a Geração Z não está apenas consumindo, mas criando suas próprias alternativas.",
    p4: "Longe de ser apenas uma moda, essa mudança reflete uma crescente conscientização sobre saúde e sustentabilidade. Jovens empreendedores estão apostando em ingredientes frescos, orgânicos e, muitas vezes, plant-based, para criar refeições que são nutritivas, saborosas e, acima de tudo, rápidas de preparar e consumir.",
    p5: "O que antes era sinônimo de fritura e excesso de calorias, agora ganha uma nova cara. Um grupo de jovens empreendedores está transformando o conceito de fast-food, provando que é possível comer rápido sem abrir mão da saúde.",
    p6: "Hambúrgueres feitos com grãos, legumes e proteínas vegetais, batatas assadas com temperos naturais e molhos à base de iogurte e ervas estão conquistando o público que busca sabor e equilíbrio. A proposta é unir praticidade e nutrição, mostrando que o lanche do dia a dia pode ser tanto gostoso quanto saudável.",
    p7: "Os novos “fast-foods saudáveis” estão ganhando espaço em feiras, escolas e até aplicativos de delivery. Além de usarem ingredientes frescos e locais, muitos desses jovens apostam em embalagens sustentáveis e na redução de desperdício — reforçando o compromisso com o meio ambiente.",
    p8: "“Queremos mudar a ideia de que comer bem é complicado ou caro. A comida saudável pode ser simples, acessível e deliciosa”, explica uma das fundadoras de uma dessas iniciativas.",
    p9: "Essa revolução alimentar mostra que a nova geração está disposta a reinventar hábitos e provar que fast-food e saúde podem, sim, andar juntos.",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    p1: "Revolution on the Plate: How Generation Z is Redefining Fast Food with Natural Ingredients",
    p2: "Julia Horing - 21/10/2025",
    p3: "São Paulo - Forget the image of greasy, ultra-processed snacks. A new wave of young entrepreneurship is transforming the concept of fast food in Brazil, proving that it's possible to combine the convenience of fast food with the benefits of a healthy and natural diet. With a rapidly expanding market for healthy foods (projected to grow by 27% by 2025), Generation Z is not only consuming, but creating its own alternatives.",
    p4: "Far from being just a fad, this change reflects a growing awareness of health and sustainability. Young entrepreneurs are betting on fresh, organic, and often plant-based ingredients to create meals that are nutritious, tasty, and above all, quick to prepare and consume.",
    p5: "What was once synonymous with fried food and excess calories is now getting a makeover. A group of young entrepreneurs is transforming the concept of fast food, proving that it's possible to eat quickly without sacrificing health.",
    p6: "Burgers made with grains, vegetables, and plant-based proteins, baked potatoes with natural seasonings, and yogurt and herb-based sauces are winning over consumers seeking flavor and balance. The idea is to combine convenience and nutrition, showing that everyday snacks can be both delicious and healthy.",
    p7: "The new ''healthy fast foods'' are gaining ground at fairs, schools, and even delivery apps. Besides using fresh, local ingredients, many of these young people are betting on sustainable packaging and reducing waste—reinforcing their commitment to the environment.",
    p8: "“We want to change the idea that eating well is complicated or expensive. Healthy food can be simple, accessible, and delicious,” explains one of the founders of one of these initiatives.",
    p9: "This food revolution shows that the new generation is willing to reinvent habits and prove that fast food and health can indeed go hand in hand.",
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
    document.getElementById("p1").textContent = textos.p1;
    document.getElementById("p2").textContent = textos.p2;
    document.getElementById("p3").textContent = textos.p3;
    document.getElementById("p4").textContent = textos.p4;
    document.getElementById("p5").textContent = textos.p5;
    document.getElementById("p6").textContent = textos.p6;
    document.getElementById("p7").textContent = textos.p7;
    document.getElementById("p8").textContent = textos.p8;
    document.getElementById("p9").textContent = textos.p9;
});