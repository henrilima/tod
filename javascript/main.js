const modoDeJogo = [
    "anciao",
    "bebe",
    "todosrespondem",
    "numeros",
    "todosfazem",
    "desafioabsoluto",
    "wtf",
    "votacao",
];
const numero = [1, 2, 3];

const imageContainer = document.getElementById("image-container");
const images = imageContainer.querySelectorAll("img");
let currentImageIndex = 0;

function loadingAnimation(iteration = 0) {
    const textElement = document.getElementById("text");
    if (iteration % 4 === 0) {
        textElement.innerHTML = "Carregando";
    } else {
        textElement.innerHTML += ".";
    }
    if (iteration === 4) {
        return;
    }
    setTimeout(() => {
        loadingAnimation(iteration + 1);
    }, 1000);
}

function escolherAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function escolherArrayAleatorio(arrayOfArrays) {
    const randomIndex = Math.floor(Math.random() * arrayOfArrays.length);
    const randomArray = arrayOfArrays[randomIndex];
    const randomElement = randomArray[Math.floor(Math.random() * randomArray.length)];
    return randomElement;
  }

function rolarDados() {
    let animationInterval = setInterval(() => {
        images.forEach((image) => (image.style.display = "none"));
        images[currentImageIndex].style.display = "block";
        currentImageIndex++;

        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }

        if (Math.random() < 100 / 1000) {
            clearInterval(animationInterval);

            const randomImageIndex = Math.floor(Math.random() * images.length);
            images.forEach((image, index) => {
                if (index === randomImageIndex) {
                    image.style.display = "block";
                    const tipo = document.getElementById("nome");
                    const descricao = document.getElementById("descricao");
                    switch (index) {
                        case 0:
                            tipo.innerHTML = "Ancião";
                            document.getElementById("titulo").innerHTML = "Ancião";
                            document.getElementById("pergunta").innerHTML = escolherAleatorio(perguntasConstrangedoras);
                            descricao.innerHTML = "A pessoa mais velha da roda responde.";
                            break;
                        case 1:
                            tipo.innerHTML = "Bebê";
                            document.getElementById("titulo").innerHTML =
                                "Bebê";
                                document.getElementById("pergunta").innerHTML = escolherAleatorio(perguntasConstrangedoras);
                            descricao.innerHTML =
                                "A pessoa mais nova da roda responde.";
                            break;
                        case 2:
                            tipo.innerHTML = "Todos Respondem";
                            document.getElementById("titulo").innerHTML =
                                "Todos Respondem";
                                document.getElementById("pergunta").innerHTML = escolherArrayAleatorio([perguntasConstrangedoras, perguntasWTF]);
                            descricao.innerHTML =
                                "Todas as pessoa da roda devem responder a pergunta.";
                            break;
                        case 3:
                            tipo.innerHTML = "Números (1, 2, 3)";
                            document.getElementById("titulo").innerHTML =
                                "Números (1, 2, 3)";
                                document.getElementById("pergunta").innerHTML = escolherArrayAleatorio([perguntasConstrangedoras, perguntasWTF]);
                            descricao.innerHTML =
                                "Os jogadores escolhem um dos números: 1, 2 ou 3. Um número será sorteado e todos que escolheram aquele número devem responder.";
                            break;
                        case 4:
                            tipo.innerHTML = "Todos fazem";
                            document.getElementById("titulo").innerHTML =
                                "Todos fazem";
                                document.getElementById("pergunta").innerHTML = escolherAleatorio(desafiosConstrangedores);
                            descricao.innerHTML =
                                "Todos os jogadores da roda devem cumprir um desafio.";
                            break;
                        case 5:
                            tipo.innerHTML = "Desafio Absoluto";
                            document.getElementById("titulo").innerHTML =
                                "Desafio Absoluto";
                                document.getElementById("pergunta").innerHTML = escolherAleatorio(desafiosPesados);
                            descricao.innerHTML =
                                "Um jogador de número sorteado deverá cumprir um desafio aleatório.";
                            break;
                        case 6:
                            tipo.innerHTML = "WTF";
                            document.getElementById("titulo").innerHTML = "WTF";
                            document.getElementById("pergunta").innerHTML = escolherAleatorio(perguntasWTF);
                            descricao.innerHTML =
                                "WTF Did You Say é um jogo de festa que envolve fazer perguntas constrangedoras ou inapropriadas aos seus amigos, um jogador será sorteado para responder uma dessas perguntas.";
                            break;
                        case 7:
                            tipo.innerHTML = "Votação";
                            document.getElementById("titulo").innerHTML =
                                "Votação";
                                document.getElementById("pergunta").innerHTML = escolherAleatorio(perguntasVotacao);
                            descricao.innerHTML =
                                "Uma pergunta será feita, e todos os jogadores deverão entrar em consenso para decidir quem é mais provável a realizar aquilo.";
                            break;
                    }
                } else {
                    image.style.display = "none";
                }
            });
        }
    }, 100);
}

function liberarPergunta() {
    document.getElementById("sct02").style.display = "none";
    document.getElementById("sct03").style.display = "flex";
}

function reiniciar() {
    document.getElementById("nome").innerHTML = "";
    document.getElementById("descricao").innerHTML = "";
    document.getElementById("sct03").style.display = "none";
    document.getElementById("sct02").style.display = "flex";
    setTimeout(() => {
        rolarDados();
    }, 500);
}

function start() {
    document.querySelector("body main").style.display = "none";
    document.getElementById("sct01").style.display = "flex";
    loadingAnimation();
    setTimeout(() => {
        document.getElementById("sct01").style.display = "none";
        setTimeout(() => {
            rolarDados();
        }, 500);
        document.getElementById("sct02").style.display = "flex";
    }, 4000);
}
