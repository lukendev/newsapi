const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "d16224c6f50c4b30955c700cb904a4e0";
const tecnologiaCategoria = 'technology'
const geralCategoria = 'general'

const boardNoticias = document.querySelector('#listaDeNoticias')

const divCard = document.querySelector('.col-4')

const btnTec = document.querySelector('#tec')
const btnLast = document.querySelector('#ultimas')


// fetch(`${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`).then((resposta) => resposta.json()).then((dados => {
//     console.log(dados)
// }));

async function getNotices(cat){
    let resposta = await fetch(`${BASE_URL}/top-headlines?country=br&category=${cat}&apiKey=${API_KEY}`)

    let dados = await resposta.json()

    console.log(dados)
    boardNoticias.innerHTML = ""
    dados.articles.forEach((noticia) => {
        boardNoticias.innerHTML += `
        <div class="col-4">
        <div class="card"><img class="card-img-top"
            src="${noticia.urlToImage}">
          <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p><a class="btn btn-primary"
              href="${noticia.url}">Ir
              para noticia</a>
          </div>
        </div>
      </div>
        `
    });

    return dados
}

getNotices(geralCategoria)

btnTec.addEventListener('click', () => {
    getNotices(tecnologiaCategoria)
})

btnLast.addEventListener('click', () => {
    getNotices(geralCategoria)
})

// fazendo post, put, delete
// fetch(link, {
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json',
//     },
//     body: 
// })

