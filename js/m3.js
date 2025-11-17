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
    p1: "Educação nutricional: como nossa dieta pode mudar o nosso cérebro",
    p2: "João Manoel - 20/10/2025",
    p3: "A ligação entre alimentação e saúde do cérebro tem sido cada vez mais estudada, e hoje já se sabe que o que comemos influencia diretamente nossa memória, nosso humor, nossa capacidade de pensar e até o risco de desenvolver doenças neurológicas. A alimentação adequada, portanto, vai muito além de fornecer energia: ela ajuda a manter o cérebro funcionando bem e contribui para uma vida mais saudável. Nesse contexto, a educação nutricional se torna fundamental para orientar escolhas que beneficiem tanto o corpo quanto a mente.",
    p4: "O cérebro, apesar de pequeno em relação ao resto do corpo, consome grande parte da energia que ingerimos. Para funcionar corretamente, ele depende de nutrientes específicos. Os ácidos graxos ômega-3, por exemplo, encontrados em peixes e sementes, ajudam na formação das células nervosas e reduzem inflamações. As vitaminas do complexo B são importantes para produzir neurotransmissores e prevenir o declínio cognitivo. Já os antioxidantes, presentes em frutas e verduras, protegem as células do cérebro contra danos. Além disso, certos aminoácidos, como o triptofano, colaboram na produção de serotonina, que está ligada ao bem-estar e ao humor. Esses nutrientes mostram que uma alimentação variada e equilibrada é essencial para manter o cérebro ativo e saudável.",
    p5: "Quando a dieta é baseada em ultraprocessados, excesso de açúcares e gorduras ruins, o impacto é negativo. Muitos estudos mostram que esse tipo de alimentação aumenta os níveis de inflamação do organismo, prejudica a comunicação entre os neurônios e altera a microbiota intestinal, que tem ligação direta com a saúde mental. Isso pode contribuir para o surgimento de ansiedade, irritabilidade e até depressão. Por outro lado, dietas ricas em alimentos naturais, como frutas, legumes, azeite e grãos integrais, estão associadas a mais equilíbrio emocional e menor risco de transtornos mentais.",
    p6: "A alimentação também influencia a neuroplasticidade, que é a capacidade do cérebro de se adaptar, formar novas conexões e aprender. Alguns nutrientes, como ômega-3, flavonoides do cacau e frutas vermelhas, e a curcumina presente no açafrão-da-terra, estimulam a produção de uma proteína chamada BDNF, que ajuda na formação e proteção dos neurônios. Isso significa que comer bem não serve apenas para evitar doenças, mas também para melhorar a aprendizagem, a memória e a capacidade de enfrentar desafios cognitivos.",
    p7: "Quando os hábitos alimentares são ruins, os riscos aumentam. O consumo frequente de alimentos industrializados pode contribuir para doenças como Alzheimer e outras demências, que estão relacionadas à inflamação crônica e ao estresse oxidativo. Também pode aumentar o risco de AVC e acelerar o declínio cognitivo. Esses problemas reforçam que comer bem não é apenas uma questão estética, mas uma forma de proteger o cérebro ao longo da vida.",
    p8: "Diante disso, a educação nutricional tem um papel muito importante. Ela ajuda as pessoas a entenderem melhor os alimentos, a desconstruírem mitos, a lerem rótulos e a identificarem escolhas mais saudáveis no dia a dia. Programas em escolas, campanhas públicas e orientações comunitárias podem incentivar hábitos alimentares mais equilibrados desde cedo. Quanto mais informações acessíveis e confiáveis estiverem disponíveis, mais autonomia as pessoas terão para cuidar da própria saúde.",
    p9: "Conclui-se, portanto, que a alimentação influencia profundamente o cérebro e o comportamento humano. Uma dieta equilibrada melhora o humor, fortalece a memória, apoia o aprendizado e reduz o risco de doenças neurológicas. Promover a educação nutricional é investir na saúde mental e na qualidade de vida da população, garantindo que todos possam fazer escolhas alimentares mais conscientes e benéficas para o cérebro e para o corpo.",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    p1: "Nutritional education: how our diet can change our brain.",
    p2: "João Manoel - 20/10/2025",
    p3: "The link between diet and brain health has been increasingly studied, and today it is known that what we eat directly influences our memory, our mood, our ability to think, and even the risk of developing neurological diseases. Proper nutrition, therefore, goes far beyond providing energy: it helps keep the brain functioning well and contributes to a healthier life. In this context, nutritional education becomes fundamental to guiding choices that benefit both body and mind.",
    p4: "The brain, despite being small compared to the rest of the body, consumes a large portion of the energy we ingest. To function correctly, it depends on specific nutrients. Omega-3 fatty acids, for example, found in fish and seeds, help in the formation of nerve cells and reduce inflammation. B vitamins are important for producing neurotransmitters and preventing cognitive decline. Antioxidants, present in fruits and vegetables, protect brain cells from damage. Furthermore, certain amino acids, such as tryptophan, contribute to the production of serotonin, which is linked to well-being and mood. These nutrients show that a varied and balanced diet is essential for keeping the brain active and healthy.",
    p5: "When a diet is based on ultra-processed foods, excess sugars, and unhealthy fats, the impact is negative. Many studies show that this type of diet increases inflammation levels in the body, impairs communication between neurons, and alters the gut microbiota, which is directly linked to mental health. This can contribute to the onset of anxiety, irritability, and even depression. On the other hand, diets rich in natural foods, such as fruits, vegetables, olive oil, and whole grains, are associated with greater emotional balance and a lower risk of mental disorders.",
    p6: "Nutrition also influences neuroplasticity, which is the brain's ability to adapt, form new connections, and learn. Some nutrients, such as omega-3 fatty acids, flavonoids from cocoa and red fruits, and curcumin found in turmeric, stimulate the production of a protein called BDNF, which helps in the formation and protection of neurons. This means that eating well not only helps prevent disease but also improves learning, memory, and the ability to face cognitive challenges.",
    p7: "When eating habits are poor, the risks increase. Frequent consumption of processed foods can contribute to diseases such as Alzheimer's and other dementias, which are related to chronic inflammation and oxidative stress. It can also increase the risk of stroke and accelerate cognitive decline. These problems reinforce the idea that eating well is not just an aesthetic issue, but a way to protect the brain throughout life.",
    p8: "Given this, nutritional education plays a very important role. It helps people better understand food, debunk myths, read labels, and identify healthier choices in their daily lives. Programs in schools, public campaigns, and community outreach can encourage more balanced eating habits from an early age. The more accessible and reliable information is available, the more autonomy people will have to take care of their own health.",
    p9: "It can be concluded, therefore, that nutrition profoundly influences the brain and human behavior. A balanced diet improves mood, strengthens memory, supports learning, and reduces the risk of neurological diseases. Promoting nutritional education is an investment in the mental health and quality of life of the population, ensuring that everyone can make more conscious and beneficial food choices for the brain and body.",
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