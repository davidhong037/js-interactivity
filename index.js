// console.log ('hello world')
const message = document.querySelector('#message')

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
    // message.textContent = 'Movie Deleted!'
    message.textContent = `${event.target.parentNode.childNodes[0].textContent} deleted!`
    //parentNode = li (movie)
    //movieTitle and deleteBtn are children of li (movie)
    //childNodes[] -> checks for index

    revealMessage()
}

function crossOffMovie(event){    
    event.target.classList.toggle('checked')
    console.log(event.target.classList.contains('checked'))
    if (event.target.classList.contains('checked') === true){
        // message.textContent = 'Movie Watched!'
        message.textContent = `${event.target.textContent} watched!`
    } else {
        // message.textContent = 'Movie added back!'
        message.textContent = `${event.target.textContent} added back!`
    }

    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')

    setTimeout(() => {
        message.className = "hide"
    }, 1000);
}

const formList = document.querySelector('form')
formList.addEventListener('submit', addMovie)

