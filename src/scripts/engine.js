// tecla windows + . você tem acesso aos emojis do windows!!!!
// ctrl + alt + shift seleciono várias linhas

const imagens = [
    "./src/images/1.png",
    "./src/images/1.png",
    "./src/images/2.png",
    "./src/images/2.png",
    "./src/images/3.png",
    "./src/images/3.png",
    "./src/images/4.png",
    "./src/images/4.png",
    "./src/images/5.png",
    "./src/images/5.png",
    "./src/images/6.png",
    "./src/images/6.png",
    "./src/images/7.png",
    "./src/images/7.png",
    "./src/images/8.png",
    "./src/images/8.png"
]; 
let openCards = [];

let shuffleImagens = imagens.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Usarei estrutura for para desenhar os elementos na tela:
for(let i=0; i < imagens.length; i++) {
    let box = document.createElement("div");
    box.className="item";

    let img = document.createElement('img');
    img.src = shuffleImagens[i];
    img.classList.add("imageHidden");
    box.appendChild(img);

    box.onclick = handleClick; /* Essa função não existe, então
    será criada logo abaixo, fora do laço "for". */
    document.querySelector(".game").appendChild(box);
} // Cara, isto// eu excolhi. Fiquei 1 hora nisso. Mas o instinto me  tem que ser super estudado!!!

function handleClick() {
    /*alert("Alô!");  só pra testar a chamada desta função. */
    this.firstChild.classList.remove("imageHidden"); // Mostra a imagem
    this.classList.add("boxOpen");
    
    
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    } 
/* Essa função checkMath também não existe, por isso a crio abaixo */
    if(openCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if(openCards[0].firstChild.src === openCards[1].firstChild.src) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");

    } else {
        openCards[0].firstChild.classList.add("imageHidden");
        openCards[1].firstChild.classList.add("imageHidden");
    }

    /*Após as verificações, tenho que zerar a lista de cards abertos */
    openCards =[];

    if(document.querySelectorAll(".boxMatch").length === imagens.length) {
        alert("Mama, você venceu 😀!");
    }
} 