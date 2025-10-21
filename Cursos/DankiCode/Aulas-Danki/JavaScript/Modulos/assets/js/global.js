
//Fetch - Lista de Supermercado

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {
    method: 'GET',

})
    .then(response => response.json())
    .then(json => {
        const container = document.querySelector('.container')

        json.results.map(function (val) {
            container.innerHTML += `
            <div style="cursor:pointer;" class="tituloFilme">
            <h2>${val.original_title}</h2>
            <div style="display:none;" class="description">
            ${val.overview}
            </div>
            <hr>
            </div>` ;
        })

        const titulos = document.querySelectorAll('.tituloFilme');

        for (let i = 0; i < titulos.length; i++) {
            titulos[i].addEventListener('click', (t) => {
                const description = titulos[i].querySelector('.description');

                if (description.style.display == "none") {
                    description.style.display = "block";
                } else {
                    description.style.display = "none";
                }
            })
        }
    });


