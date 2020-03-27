// Variables

const listaTweets = document.getElementById('lista-tweets')
let contTweets


// Event Listeners
eventListeners()

function eventListeners() {
  // Cuando se envia un formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet)

  // Borrar Tweets
  listaTweets.addEventListener('click', borrarTweet)

  // Contenido cargado
  document.addEventListener('DOMContentLoaded', localStorageListo)
}


// Funciones

//Añadir tweets del formulario
function agregarTweet (e) {
  e.preventDefault()
  console.log('Formulario enviado')
  // leer el valor del textArea
  const tweet = document.getElementById('tweet').value
  if (tweet != '') {
    // Crear lista en el DOM
    crearLista(tweet)
    
    // Añadir a Local Storage
    agregarTweetLocalStorage(tweet)
  }

  // Borrar textArea
  document.getElementById('tweet').value = ""
}


// Elimina el Tweet del DOM
function borrarTweet (e) {
  e.preventDefault()
  if (e.target.className === 'borrar-tweet') {
    e.target.parentElement.remove()
    borrarTweetLocalStorage(e.target.parentElement.innerText)
  }
}

// Mostrar datos de LocalStorage en la lista
function localStorageListo () {
  let tweets

  tweets = obtenerTweetsLocalStorage()

  tweets.forEach( function (tweet) {
    crearLista(tweet)
  } )
}

function crearLista (tweet) {
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

// Comprobar que haya elementos en localStorage, retorna un arreglo
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

// Eliminar tweet de Local Storage

function borrarTweetLocalStorage (tweet) {
  let tweets, tweetBorrar
  // Elimina la X del tweet
  tweetBorrar =  tweet.substring(0, tweet.length - 1)

  tweets = obtenerTweetsLocalStorage()

  tweets.forEach( function (tweet, index) {
    tweet = tweet.replace(/\n/gi, '')
    console.log(tweet)
    if (tweetBorrar === tweet) {
      tweets.splice(index, 1)
    }
  } )

  localStorage.setItem('tweets', JSON.stringify(tweets))
}
