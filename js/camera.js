const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");

// capitura da ft
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");

let imagemURL = "";

// sauvar dados e enviar
const botaoEnviarFoto = document.querySelector("[data-enviar]");


// addEventListenefr ==  ouvinte de eventos
// click é o evento q ele estava esperando.
botaoIniciarCamera.addEventListener("click", async function () {
    // navigator.mediaDevices == metodo padrão q pede ao navegador para aceitar a inicialização da camera
    const iniciarVideo = await navigator.mediaDevices
    // getUserMedia == escolha do tipo de midia q eu vou querer
    .getUserMedia({ video: true, audio: false });

    // fax com q o botaoIniciarCamera usna da tela
    botaoIniciarCamera.style.display = "none";
    // para aparever na tela o ghuadaro da camera.
    campoCamera.style.display = "block";

    // manda para o video o comando de iniciar video ao cumprir toda a cascata.
    video.srcObject = iniciarVideo;
})

// foto
botaoTirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});

// eviar foto

botaoEnviarFoto.addEventListener("click", function(){
    const recebeDadosExistentes =  localStorage.getItem('cadastro');
    const converteRemoto = JSON.parse(recebeDadosExistentes);

    converteRemoto.image = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRemoto));

    window.location.href = '../pages/abrir-conta-form-3.html';
})
