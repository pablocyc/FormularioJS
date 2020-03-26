// Variables

const listaTweets = document.getElementById('lista-tweets')



// Event Listeners
eventListeners()

function eventListeners() {
  // Cuando se envia un formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet)
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
  
  console.log(tweet)
}
