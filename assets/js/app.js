// Variables

const listaTweets = document.getElementById('lista-tweets')



// Event Listeners
eventListeners()

function eventListeners() {
  // Cuando se envia un formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet)

  // Borrar Tweets
  listaTweets.addEventListener('click', borrarTweet)
}




// Funciones



//Añadir tweets del formulario
function agregarTweet (e) {
  e.preventDefault()
  console.log('Formulario enviado')
  // leer el valor del textArea
  const tweet = document.getElementById('tweet').value
  // crear boton de eliminar
  const botonBorrar = document.createElement('a')
  botonBorrar.classList = 'borrar-tweet'
  botonBorrar.innerText = 'X'

  // Crear elemento y añadirle el contenido a la lista
  const li = document.createElement('li')
  li.innerText = tweet
  // añade el boton de borrar el tweet
  li.appendChild(botonBorrar)
  // añade el tweet a la lista
  listaTweets.appendChild(li)

  // Añadir a Local Storage
  agregarTweetLocalStorage(tweet)

  
}


// Elimina el Tweet del DOM
function borrarTweet (e) {
  e.preventDefault()
  if (e.target.className === 'borrar-tweet') {
    console.log(e.target.parentElement.remove())
    alert('Tweet Eliminado')
  }
}

// Agrega Tweet a Local Storage
function agregarTweetLocalStorage (tweet) {
  let tweets
  tweets = obtenerTweetsLocalStorage()

  // añadir el nuevo tweet
  tweets.push(tweet)

  // Convertir de string a arreglo para localStorage
  localStorage.setItem('tweets', JSON.stringify(tweets))
  
}


function obtenerTweetsLocalStorage () {
  let tweets

  // Revisamos los valores del local storage
  if (localStorage.getItem('tweets') === null) {
    tweets = []
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'))
  }
  return tweets
}

