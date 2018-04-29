
let search = document.getElementById('search-box')
let searchButton = document.getElementById('search-btn')

search.focus();

function getUserInput(){

    let movie = search.value.trim() || 'Boss baby';
    
    let myApiKey = 'd814cb7f358ee9497a8ae5416bad34c6'
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${movie}`


fetch(url)
    .then(res => res.json())
    .then(data => {

        let movies = data.results
    
       let root = document.querySelector('.root')
       root.textContent = '' //reset the parent div; i.e remove all divs or set them to empty
        for(let i=0; i<movies.length; i++){
            
            let div_well = createElement('div')
            let div_row = createElement('div')
            let div_img = createElement('div')
            let div_col9 = createElement('div')
            let img = createElement('img')
            let title = createElement('p')
            let rating = createElement('p')
            let release_date = createElement('p')
            let overview = createElement('p')

            div_well.className = 'well'
            div_row.className = 'row'
            div_img.className = 'col-sm-3'
            div_col9.className= 'col-sm-9 description'
            img.className="img-responsive"
            img.src =`https://image.tmdb.org/t/p/original/${movies[i].poster_path}`

            
            title.innerHTML = `Title: ${movies[i].original_title}`
            rating.innerHTML = `Rating: ${movies[i].vote_average}`
            release_date.innerHTML = `Release date: ${movies[i].release_date}`
            overview.innerHTML = `Overview: ${movies[i].overview}`

            appendChild(img, div_img)
            appendChild(div_img, div_row)
            appendChild(div_row, div_well)
            appendChild(div_well, root)

            appendChild(title, div_col9)
            appendChild(rating, div_col9)
            appendChild(release_date, div_col9)
            appendChild(overview, div_col9)
            appendChild(div_col9,div_row)    
        }
    })
    search.value = ''
    search.focus();
}
function createElement(element){
    return document.createElement(`${element}`)
}

function appendChild(child, parent){
    return parent.appendChild(child)
}