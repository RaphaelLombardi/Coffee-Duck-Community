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
    p1: "Matérias em Destaque",
    p2: "Quem somos?",
    p3: "A Duck Coffee Community (comunidade do café com pato) surgiu como um projeto escolar, e evoluiu para uma prática e divulgação da educação nutricional no nosso meio. Hoje somos uma equipe de três estudantes (e nosso mascote) na missão de tornar a educação nutricional uma prática comum na sociedade.",
    p4: "Objetivo",
    p5: "Promover a melhoria dos hábitos alimentares de um grupo por meio de ações educativas que desenvolvam conhecimentos, atitudes e práticas nutricionais saudáveis, contribuindo para a autonomia nas escolhas alimentares e para a prevenção de doenças relacionadas à alimentação inadequada, seguindo os sete passos principais do nosso programa.",
    p6: "Os sete passos",
    p7: "1. Desenvolver conhecimento nutricional",
    p8: "Aprender o papel dos principais nutrientes e como eles influenciam a saúde. Esse conhecimento permite fazer escolhas alimentares mais equilibradas e conscientes.",
    p9: "2. Conhecer seu próprio corpo e necessidades",
    p10: "Entender que idade, rotina, gasto energético e objetivos influenciam a alimentação ideal. Isso ajuda a adaptar a dieta ao que realmente funciona para você.",
    p11: "3. Desenvolver consciência alimentar",
    p12: "Observar o que, quando e por que você come, percebendo padrões e gatilhos. Essa consciência facilita mudanças mais saudáveis e sustentáveis no comportamento alimentar.",
    p13: "4. Priorizar alimentos naturais e variados",
    p14: "Dar preferência a frutas, verduras, legumes, grãos e alimentos minimamente processados. Isso garante maior diversidade de nutrientes e reduz o consumo de produtos prejudiciais.",
    p15: "5. Planejar refeições",
    p16: "Organizar horários, lista de compras e preparações para evitar escolhas impulsivas. O planejamento aumenta a regularidade e a qualidade nutricional das refeições.",
    p17: "6. Buscar orientação confiável",
    p18: "Apoiar-se em profissionais qualificados, como nutricionistas, e fontes científicas. Isso evita mitos alimentares e dietas perigosas ou ineficazes.",
    p19: "7. Obter autonomia alimentar",
    p20: "Ser capaz de avaliar alimentos e montar refeições equilibradas sem depender de dietas prontas. Essa autonomia fortalece a manutenção de hábitos saudáveis a longo prazo.",
    p21: "Integrantes",
    p22: "João Manoel",
    p23: "Curso: IIW25A",
    p24: "João, apelido: Pato, inspirou a identidade do nosso projeto e o nosso mascote. É o nosso melhor pesquisador, para saber mais acesse seu perfil abaixo:",
    p25: "Saiba Mais",
    p26: "Julia Horing",
    p27: "Curso: IIW25A",
    p28: "Julia, exímia pesquisadora e a designer do projeto e organizou nossa identidade visual, para saber mais acesse seu perfil abaixo:",
    p29: "Saiba Mais",
    p30: "Raphael Lombardi",
    p31: "Curso: IIW25A",
    p32: "Raphael, o programador principal e o mais carismático do projeto, para saber acesse seu perfil abaixo:",
    p33: "Saiba Mais",
    p34: "Mapa do Site",
    p35: "Saiba onde encontrar o que precisa em cada lugar do site, acessando pelo cabeçalho no topo da tela ou pelos seguintes links abaixo:",
    p36: "Página Inicial:",
    p37: "Encontre nossas matérias e todo o cunteúdo do site aqui:",
    p38: "Encontre quizes sobre educação nutricional para expandir seus conhecimentos aqui:",
    p39: "Saiba mais sobre nossos integrantes aqui:",
    p40: "Entre em contato com o projeto aqui:",
    p41: "Mude o idioma para inglês ou português aqui:",
    p42: "Clique no botão ''PT-BR'' ",
    p43: "Mude o fundo do site para claro ou escuro aqui:",
    p44: "Clique no botão ''Tema'' ",
    p45: "O perigo das Fake News para a educação nutricional",
    p46: "Os Benefícios de uma Alimentação Natural e os Prejuízos dos Alimentos Industrializados",
    p47: "Como Nossa Dieta Pode Mudar o Nosso Cérebro",
    p48: "Revolução no Prato: Como a Geração Z Está Redefinindo o \"Fast-Food\" com Ingredientes Naturais",
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
    p1: "Featured Articles",
    p2: "who we are?",
    p3: "The Duck Coffee Community started as a school project and evolved into a practice and dissemination of nutritional education in our environment. Today we are a team of three students (and our mascot) on a mission to make nutritional education a common practice in society.",
    p4: "Objective",
    p5: "Promote the improvement of eating habits of a group through educational actions that develop knowledge, attitudes and healthy nutritional practices, contributing to autonomy in food choices and to the prevention of diseases related to inadequate eating, following the seven main steps of our program.",
    p6: "The seven steps",
    p7: "1. Develop nutritional knowledge",
    p8: "Learn the role of the main nutrients and how they influence health. This knowledge allows you to make more balanced and conscious food choices.",
    p9: "2. Know your own body and needs",
    p10: "Understand that age, routine, energy expenditure and goals influence ideal eating. This helps to adapt the diet to what really works for you.",
    p11: "3. Develop food awareness",
    p12: "Observe what, when and why you eat, noticing patterns and triggers. This awareness facilitates healthier and more sustainable changes in eating behavior.",
    p13: "4. Prioritize natural and varied foods",
    p14: "Give preference to fruits, vegetables, legumes, grains and minimally processed foods. This ensures greater nutrient diversity and reduces the consumption of harmful products.",
    p15: "5. Plan meals",
    p16: "Organize schedules, shopping lists and preparations to avoid impulsive choices. Planning increases the regularity and nutritional quality of meals.",
    p17: "6. Seek reliable guidance",
    p18: "Rely on qualified professionals, such as nutritionists, and scientific sources. This avoids food myths and dangerous or ineffective diets.",
    p19: "7. Achieve food autonomy",
    p20: "Be able to evaluate foods and assemble balanced meals without relying on ready-made diets. This autonomy strengthens the maintenance of healthy habits in the long term.",
    p21: "Members",
    p22: "João Manoel",
    p23: "Course: IIW25A",
    p24: "João, nickname: Duck, inspired the identity of our project and our mascot. He is our best researcher, to learn more access his profile below:",
    p25: "Learn More",
    p26: "Julia Horing",
    p27: "Course: IIW25A",
    p28: "Julia, an excellent researcher and the project designer organized our visual identity, to learn more access her profile below:",
    p29: "Learn More",
    p30: "Raphael Lombardi",
    p31: "Course: IIW25A",
    p32: "Raphael, the main programmer and the most charismatic of the project, to learn more access his profile below:",
    p33: "Learn More",
    p34: "Site Map",
    p35: "Find where to find what you need in each place on the site, accessing through the header at the top of the screen or through the following links below:",
    p36: "Home Page:",
    p37: "Find our articles and all the content of the site here:",
    p38: "Find quizzes about nutritional education to expand your knowledge here:",
    p39: "Learn more about our members here:",
    p40: "Contact the project here:",
    p41: "Change the language to English or Portuguese here:",
    p42: "Click the ''PT-BR'' button ",
    p43: "Change the website background to light or dark here:",
    p44: "Click the ''Theme'' button ",
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
    document.getElementById("p1").textContent = textos.p1;
    document.getElementById("p2").textContent = textos.p2;
    document.getElementById("p3").textContent = textos.p3;
    document.getElementById("p4").textContent = textos.p4;
    document.getElementById("p5").textContent = textos.p5;
    document.getElementById("p6").textContent = textos.p6;
    document.getElementById("p7").textContent = textos.p7;
    document.getElementById("p8").textContent = textos.p8;
    document.getElementById("p9").textContent = textos.p9;
    document.getElementById("p10").textContent = textos.p10;
    document.getElementById("p11").textContent = textos.p11;
    document.getElementById("p12").textContent = textos.p12;
    document.getElementById("p13").textContent = textos.p13;
    document.getElementById("p14").textContent = textos.p14;
    document.getElementById("p15").textContent = textos.p15;
    document.getElementById("p16").textContent = textos.p16;
    document.getElementById("p17").textContent = textos.p17;
    document.getElementById("p18").textContent = textos.p18;
    document.getElementById("p19").textContent = textos.p19;
    document.getElementById("p20").textContent = textos.p20;
    document.getElementById("p21").textContent = textos.p21;
    document.getElementById("p22").textContent = textos.p22;
    document.getElementById("p23").textContent = textos.p23;
    document.getElementById("p24").textContent = textos.p24;
    document.getElementById("p25").textContent = textos.p25;
    document.getElementById("p26").textContent = textos.p26;
    document.getElementById("p27").textContent = textos.p27;
    document.getElementById("p28").textContent = textos.p28;
    document.getElementById("p29").textContent = textos.p29;
    document.getElementById("p30").textContent = textos.p30;
    document.getElementById("p31").textContent = textos.p31;
    document.getElementById("p32").textContent = textos.p32;
    document.getElementById("p33").textContent = textos.p33;
    document.getElementById("p34").textContent = textos.p34;
    document.getElementById("p35").textContent = textos.p35;
    document.getElementById("p36").textContent = textos.p36;
    document.getElementById("p37").textContent = textos.p37;
    document.getElementById("p38").textContent = textos.p38;
    document.getElementById("p39").textContent = textos.p39;
    document.getElementById("p40").textContent = textos.p40;
    document.getElementById("p41").textContent = textos.p41;
    document.getElementById("p42").textContent = textos.p42;
    document.getElementById("p43").textContent = textos.p43;
    document.getElementById("p44").textContent = textos.p44;
    document.getElementById("p45").textContent = textos.p45;
    document.getElementById("p46").textContent = textos.p46;
    document.getElementById("p47").textContent = textos.p47;
    document.getElementById("p48").textContent = textos.p48;
    document.getElementById("p49").textContent = textos.p49;
    document.getElementById("p50").textContent = textos.p50;
    document.getElementById("p51").textContent = textos.p51;
});