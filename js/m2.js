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
    p1: "Os Benefícios de uma Alimentação Natural e os Prejuízos dos Alimentos Industrializados",
    p2: "Por: João Manoel - 13/09/2025",
    p3: "A alimentação é uma das necessidades mais básicas da vida humana, mas também é um fator determinante para a manutenção da saúde e da qualidade de vida. Nos últimos séculos, principalmente a partir da Revolução Industrial, o hábito alimentar da população mundial sofreu uma transformação significativa. O consumo de alimentos naturais e frescos, que predominava em sociedades tradicionais, passou a ser progressivamente substituído por alimentos processados e, em especial, pelos chamados **ultraprocessados**.",
    p4: "Essa mudança trouxe conveniência e praticidade, mas também uma série de consequências negativas para a saúde. Diversos estudos mostram que dietas baseadas em produtos industrializados estão associadas a maiores índices de obesidade, doenças cardiovasculares, diabetes tipo 2 e até distúrbios emocionais (Monteiro et al., 2019). Em contrapartida, uma alimentação natural, rica em vegetais, frutas, cereais integrais e proteínas de qualidade, tem sido constantemente relacionada à prevenção de doenças e à promoção do bem-estar físico e mental.",
    p5: "O objetivo deste artigo é discutir os benefícios de uma alimentação natural e contrastá-los com os prejuízos associados ao consumo frequente de alimentos industrializados.",
    p6: "A alimentação natural oferece diversos benefícios porque alimentos in natura, como frutas, verduras, legumes, oleaginosas e cereais integrais, são ricos em vitaminas, minerais, fibras e antioxidantes. Esses nutrientes são fundamentais para o bom funcionamento do metabolismo, fortalecem a imunidade, ajudam na regulação hormonal e contribuem para a prevenção de doenças crônicas, como câncer e problemas cardiovasculares. Além disso, o consumo de fibras melhora o sistema digestivo, favorecendo o funcionamento intestinal e a saúde da microbiota, que influencia diretamente o equilíbrio emocional. Os alimentos naturais também auxiliam no controle do peso por terem menor densidade calórica e maior capacidade de promover saciedade, e ainda influenciam positivamente o bem-estar físico e mental ao colaborar na produção de neurotransmissores como serotonina e dopamina.",
    p7: "Por outro lado, os alimentos industrializados trazem prejuízos importantes. Eles costumam apresentar excesso de açúcares, sódio e gorduras trans ou saturadas, aumentando os riscos de obesidade, diabetes tipo 2, hipertensão e doenças cardiovasculares. Aditivos químicos usados para dar sabor, cor e durabilidade também podem causar irritações, alergias e contribuir para desequilíbrios metabólicos. Além disso, muitos ultraprocessados possuem baixo valor nutricional, oferecendo principalmente “calorias vazias” e contribuindo para a chamada “fome oculta”, quando o corpo recebe energia, mas não nutrientes. O consumo frequente desses alimentos ainda está associado a impactos negativos na saúde mental, como maior incidência de ansiedade e depressão, tanto pelo efeito na microbiota intestinal quanto pelas oscilações glicêmicas que afetam o equilíbrio emocional.",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    p1: "The Benefits of a Natural Diet and the Harmful Effects of Processed Foods",
    p2: "By: João Manoel - 09/13/2025",
    p3: "Food is one of the most basic needs of human life, but it is also a determining factor in maintaining health and quality of life. In recent centuries, especially since the Industrial Revolution, the eating habits of the world's population have undergone a significant transformation. The consumption of natural and fresh foods, which predominated in traditional societies, has been progressively replaced by processed foods and, in particular, by so-called ultra-processed foods.",
    p4: "This change has brought convenience and practicality, but also a series of negative health consequences. Several studies show that diets based on processed products are associated with higher rates of obesity, cardiovascular disease, type 2 diabetes, and even emotional disorders (Monteiro et al., 2019). In contrast, a natural diet, rich in vegetables, fruits, whole grains, and quality proteins, has been consistently linked to disease prevention and the promotion of physical and mental well-being.",
    p5: "The aim of this article is to discuss the benefits of a natural diet and contrast them with the drawbacks associated with the frequent consumption of processed foods.",
    p6: "Natural foods offer numerous benefits because whole foods, such as fruits, vegetables, legumes, nuts, and whole grains, are rich in vitamins, minerals, fiber, and antioxidants. These nutrients are essential for proper metabolism, strengthen immunity, help regulate hormones, and contribute to the prevention of chronic diseases such as cancer and cardiovascular problems. Furthermore, fiber consumption improves the digestive system, promoting intestinal function and the health of the gut microbiota, which directly influences emotional balance. Natural foods also aid in weight control due to their lower caloric density and greater ability to promote satiety, and they positively influence physical and mental well-being by contributing to the production of neurotransmitters such as serotonin and dopamine.",
    p7: "On the other hand, processed foods cause significant harm. They often contain excess sugars, sodium, and trans or saturated fats, increasing the risk of obesity, type 2 diabetes, hypertension, and cardiovascular disease. Chemical additives used for flavor, color, and durability can also cause irritation, allergies, and contribute to metabolic imbalances. Furthermore, many ultra-processed foods have low nutritional value, offering mainly ''empty calories'' and contributing to so-called ''hidden hunger,'' where the body receives energy but not nutrients. Frequent consumption of these foods is also associated with negative impacts on mental health, such as a higher incidence of anxiety and depression, both due to the effect on the gut microbiota and the glycemic fluctuations that affect emotional balance.",
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
});