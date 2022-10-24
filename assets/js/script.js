// Events
// Identificado quando o botão de buscar é clicado e dispara a função searchGif
document.querySelector('#searchBtn').addEventListener('click', searchGif);

// Identificado quando o Enter é pressionado no campo de busca e dispara a função searchGif
document.querySelector('#searchInput').addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchGif ()
    }
});

let searchValue = document.querySelector('#searchInput').value;

// Functions
// Função que busca s gifs no Tenor
async function searchGif (searchValue) {
     
    //let searchInput = document.querySelector('#searchInput');
    

    // Exibição do Carregando... até a promessa retornar
    document.querySelector('.gifs').innerHTML = '<div class="col-md mt-4">Carregando...</div>';

    // Requisição dos gifs
    let req = await fetch(`https://tenor.googleapis.com/v2/search?q=${searchValue}&key=AIzaSyD0Gtagyi2BUKkJ-pwVD8irjgHq3kABbcQ&limit=16`);
    let json = await req.json();
    console.log(json);

    showGifs(json); 
}

// Função que montará a exibição dos Gifs 
function showGifs(list) {
    let html = "";

    for(let i = 0; i < list.results.length; i++) {
        html += 
            `<div class="col-md-3 p-3">
                
                <div class="p-2">
                
                    <img class="img-fluid img-thumbnail" src="${list.results[i].media_formats.tinygif.url}" />

                </div>
                
            </div>`;
    }
    document.querySelector('.gifs').innerHTML = html;
}   