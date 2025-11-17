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
    p1: "Receitas da vovó voltam à moda com um toque saudável",
    p2: "Julia Horing - 01/11/2025",
    p3: "Em um mundo de fast-food e dietas da moda, um movimento culinário está resgatando a essência da cozinha afetiva, unindo a nostalgia das ''receitas da vovó'' com uma crescente busca por um estilo de vida mais saudável. O resultado é uma jornada comovente que não apenas nutre o corpo, mas também a alma e as memórias de família.",
    p4: "Para muitos, a comida da infância evoca um sentimento imediato de carinho e segurança. O cheiro do bolo assando no forno, o carinho no preparo de um prato específico, são memórias que moldam nossa percepção do paladar e do amor. No entanto, muitas dessas receitas tradicionais, ricas em açúcar, gorduras ou sal, acabavam sendo deixadas de lado por quem aderia a uma alimentação mais regrada.",
    p5: "O movimento vai além de simples substituições de ingredientes; ele é impulsionado por histórias reais de reconexão familiar.",
    p6: "A reportagem do nosso veículo conversou com a chef Helena Silveira, que encontrou em um caderno de receitas de sua avó, Dona Rosa, a inspiração para seu novo livro. ''As páginas manchadas de molho de tomate e as anotações à mão da minha avó eram um portal para a minha infância'', conta Helena, emocionada. ''Decidi que precisava compartilhar essas receitas, mas com uma roupagem que fizesse sentido para a nossa realidade de hoje, onde a saúde é prioridade. Transformei o 'Bolo de Fubá da Vovó Rosa', que era bem açucarado, em uma versão com biomassa de banana verde e melado. O sabor é diferente, mas a essência e o carinho são os mesmos''.",
    p7: "Outro exemplo é o de João Carlos, que, após um diagnóstico de diabetes, teve que repensar sua alimentação. A receita favorita de sua mãe era um empadão de frango cremoso. Juntos, eles desenvolveram uma versão com menos sódio, massa integral e requeijão light, que agora é o prato principal dos almoços de domingo da família, garantindo que a tradição continue viva e segura para a saúde de João.",
    p8: "Essas iniciativas mostram que as receitas de família são mais do que apenas instruções culinárias; são uma herança sentimental e amorosa, um registro de gerações passadas. Ao adicionar um toque saudável, as famílias não estão apagando o passado, mas sim garantindo que essas memórias possam ser saboreadas por mais tempo e por mais pessoas, unindo diferentes gerações em torno da mesa.",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    p1: "Grandma's recipes are back in fashion with a healthy twist.",
    p2: "Julia Horing - 01/11/2025",
    p3: "In a world of fast food and fad diets, a culinary movement is reclaiming the essence of comfort food, combining the nostalgia of ''grandma's recipes'' with a growing search for a healthier lifestyle. The result is a moving journey that nourishes not only the body, but also the soul and family memories.",
    p4: "For many, childhood food evokes an immediate feeling of affection and security. The smell of cake baking in the oven, the care taken in preparing a specific dish, are memories that shape our perception of taste and love. However, many of these traditional recipes, rich in sugar, fat, or salt, ended up being left aside by those who adopted a more regulated diet.",
    p5: "The movement goes beyond simple ingredient substitutions; it's driven by real stories of family reconnection.",
    p6: "Our reporter spoke with chef Helena Silveira, who found inspiration for her new book in her grandmother Dona Rosa's recipe book. ''The pages stained with tomato sauce and my grandmother's handwritten notes were a portal to my childhood,'' says Helena, emotionally. ''I decided I needed to share these recipes, but with a twist that made sense for our reality today, where health is a priority. I transformed 'Grandma Rosa's Cornmeal Cake,' which was quite sugary, into a version with green banana biomass and molasses. The flavor is different, but the essence and the affection are the same.''",
    p7: "Another example is João Carlos, who, after being diagnosed with diabetes, had to rethink his diet. His mother's favorite recipe was a creamy chicken pot pie. Together, they developed a version with less sodium, whole wheat crust, and light cream cheese, which is now the main dish for the family's Sunday lunches, ensuring that the tradition remains alive and safe for João's health.",
    p8: "These initiatives show that family recipes are more than just culinary instructions; they are a sentimental and loving legacy, a record of past generations. By adding a healthy twist, families are not erasing the past, but rather ensuring that these memories can be savored for longer and by more people, uniting different generations around the table.",
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