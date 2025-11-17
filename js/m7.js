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
    p1: "Restaurantes e escolas reduzem desperdício de alimentos em 40% com novas iniciativas",
    p2: "Raphael Lombardi - 02/11/2025",
    p3: "Nos últimos meses, diversas escolas e restaurantes de todo o país têm mostrado que é possível unir sustentabilidade e responsabilidade social à boa alimentação. De acordo com dados recentes divulgados por secretarias municipais e associações gastronômicas, o desperdício de alimentos caiu cerca de 40% após a adoção de novas práticas sustentáveis.",
    p4: "Entre as principais medidas estão o reaproveitamento de ingredientes, o planejamento de cardápios sazonais, o uso consciente de porções e a implantação de compostagem para restos orgânicos. Nas escolas, ações educativas têm conscientizado alunos sobre a importância de servir apenas o necessário e valorizar cada refeição.",
    p5: "Já nos restaurantes, chefs e gestores têm apostado em doações de excedentes a instituições de caridade e no uso criativo de partes pouco aproveitadas dos alimentos, como cascas e talos.",
    p6: "Essas iniciativas não apenas reduzem o impacto ambiental, mas também inspiram a população a repensar seus hábitos de consumo. A mensagem é clara: com pequenas mudanças, é possível alimentar mais pessoas e desperdiçar menos.",
    p7: "''A maior recompensa não é apenas a economia financeira, mas a mudança de atitude em relação ao meio ambiente e à alimentação''",
    p8: "Relata uma professora envolvida em um dos projetos escolares. O sucesso dessas iniciativas inspira a esperança de que, com ações conjuntas, a sociedade possa avançar em direção a um futuro mais consciente e com menos desperdício.",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    p1: "Restaurants and schools reduce food waste by 40% with new initiatives.",
    p2: "Raphael Lombardi - 02/11/2025",
    p3: "In recent months, several schools and restaurants across the country have shown that it is possible to combine sustainability and social responsibility with good nutrition. According to recent data released by municipal secretariats and gastronomic associations, food waste has fallen by about 40% after the adoption of new sustainable practices.",
    p4: "Among the main measures are the reuse of ingredients, the planning of seasonal menus, the conscious use of portions, and the implementation of composting for organic waste. In schools, educational initiatives have raised students' awareness of the importance of serving only what is necessary and valuing each meal.",
    p5: "In restaurants, chefs and managers have been opting to donate surplus food to charities and to creatively use underutilized parts of food, such as peels and stems.",
    p6: "These initiatives not only reduce environmental impact but also inspire the population to rethink their consumption habits. The message is clear: with small changes, it is possible to feed more people and waste less.",
    p7: "''The greatest reward is not just the financial savings, but the change in attitude towards the environment and food.''",
    p8: "A teacher involved in one of the school projects reports that the success of these initiatives inspires hope that, through joint actions, society can move towards a more conscious future with less waste.",
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
});