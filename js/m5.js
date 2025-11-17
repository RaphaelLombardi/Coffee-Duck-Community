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
    p1: "Alunos melhoram desempenho escolar com merenda mais saudável",
    p2: "Raphael Lombardi - 27/10/2025",
    p3: "A máxima de que ''saco vazio não para em pé'' ganha uma nova dimensão no contexto educacional, com evidências crescentes de que a qualidade da merenda escolar impacta diretamente no rendimento acadêmico dos estudantes. Uma alimentação balanceada, rica em nutrientes, tem se mostrado uma ferramenta poderosa para aumentar a concentração, a memória e a disposição em sala de aula.",
    p4: "Diversas pesquisas e relatos de programas de alimentação escolar pelo Brasil e no mundo, como os implementados pelo Programa Nacional de Alimentação Escolar (PNAE) e endossados por agências da ONU, apontam uma associação direta entre a oferta de refeições nutritivas e a melhoria das condições de saúde e segurança alimentar, que por sua vez, elevam o rendimento escolar.",
    p5: "Uma alimentação equilibrada tem se mostrado uma grande aliada no desempenho escolar dos estudantes. Em diversas escolas do país, mudanças no cardápio da merenda — com a inclusão de frutas, verduras, cereais integrais e menos alimentos ultraprocessados — têm resultado em melhorias significativas na concentração, disposição e aprendizado dos alunos.",
    p6: "De acordo com nutricionistas, uma dieta rica em nutrientes essenciais, como vitaminas, proteínas e fibras, favorece o bom funcionamento do cérebro, melhora a memória e aumenta a energia ao longo do dia. “Quando os estudantes se alimentam bem, conseguem manter o foco nas aulas e participam com mais entusiasmo das atividades escolares”, explica a nutricionista escolar Carla Mendes.",
    p7: "Professores também relatam mudanças positivas. Muitos notaram que os alunos estão mais atentos e com melhor desempenho nas provas e trabalhos após as mudanças na merenda. Além disso, a adoção de hábitos alimentares saudáveis desde cedo contribui para prevenir doenças e incentivar escolhas conscientes no futuro.",
    p8: "A experiência mostra que investir em uma merenda nutritiva é investir na educação e no bem-estar das crianças e adolescentes. Uma boa alimentação, afinal, é o combustível certo para o aprendizado.",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    p1: "Students improve their academic performance with healthier school meals.",
    p2: "Raphael Lombardi - 27/10/2025",
    p3: "The saying ''an empty sack cannot stand upright'' takes on a new dimension in the educational context, with growing evidence that the quality of school meals directly impacts students' academic performance. A balanced diet, rich in nutrients, has proven to be a powerful tool for increasing concentration, memory, and energy in the classroom.",
    p4: "Several studies and reports on school feeding programs in Brazil and around the world, such as those implemented by the National School Feeding Program (PNAE) and endorsed by UN agencies, point to a direct association between the provision of nutritious meals and improved health and food security conditions, which in turn increase school performance.",
    p5: "A balanced diet has proven to be a great ally in students' academic performance. In several schools across the country, changes to the school lunch menu—including fruits, vegetables, whole grains, and fewer ultra-processed foods—have resulted in significant improvements in students' concentration, energy levels, and learning.",
    p6: "According to nutritionists, a diet rich in essential nutrients, such as vitamins, proteins, and fiber, promotes good brain function, improves memory, and increases energy throughout the day. ''When students eat well, they are able to stay focused in class and participate more enthusiastically in school activities,'' explains school nutritionist Carla Mendes.",
    p7: "Teachers also report positive changes. Many have noticed that students are more attentive and perform better on tests and assignments after the changes to school meals. Furthermore, adopting healthy eating habits from an early age helps prevent diseases and encourages conscious choices in the future.",
    p8: "Experience shows that investing in nutritious school meals is investing in the education and well-being of children and adolescents. Good nutrition, after all, is the right fuel for learning.",
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