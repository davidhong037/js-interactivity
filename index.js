// console.log ('hello world')
const message = document.querySelector('#mesasge')

function addMovie(event){
    event.preventDefault()

    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle) //movie is the parent element to movieTitle

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn) //movie is the parent element to deleteBtn

    const list = document.querySelector('ul')
    list.appendChild(movie) //list is the parent element to movie, so list -> movie -> movieTitle



    inputField.value = ''

}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = alert('Movie Deleted!')
}

function crossOffMovie(event){    
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = alert('Movie Watched!')
    } else {
        message.textContent = alert('Movie added back!')
    }
}

const formList = document.querySelector('form')
formList.addEventListener('submit', addMovie)

