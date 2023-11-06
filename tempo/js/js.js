const chave = '13bf87af4a4f7682127eef8454081676';
const nomeCidade = document.querySelector('.input-cidade');
const botao = document.querySelector('.botao-busca');
const textoCidade = document.querySelector('.cidade');
const temperatura = document.querySelector('.temp');
const imagem = document.querySelector('.img-previsao');
const textPrevisao  = document.querySelector('.texto-previsao');

botao.addEventListener ('click',pesquisar);

async function pesquisar(){
    const cidade = nomeCidade.value 
    const dados =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())


    textoCidade.textContent = 'Tempo em '+dados.name+ ', ' + dados.sys.country
    temperatura.textContent = Math.ceil(dados.main.temp) + '°C'
    textPrevisao.textContent = dados.weather[0].description
    imagem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    console.log(dados)
}