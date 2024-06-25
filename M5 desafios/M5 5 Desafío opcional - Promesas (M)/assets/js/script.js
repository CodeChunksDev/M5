// Requerimiento 2: Crear una función asíncrona para obtener los datos de la URL
async function obtenerDatos() {
    // Requerimiento 3: Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Requerimiento 4: Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar
      // solamente los primeros 20 títulos de los datos recibidos.
      const lista = document.getElementById('lista-albumes');
      data.slice(0, 20).forEach(album => {
        console.log(album.title);
        
        // Crear un elemento <li> para cada título y agregarlo a la lista en el HTML
        const li = document.createElement('li');
        li.textContent = album.title;
        lista.appendChild(li);
      });
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
  // Requerimiento 5: Crear una función que retorne una promesa después de tres (3) segundos utilizando setTimeout
  function enviarInformacion() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Información Enviada');
      }, 3000);
    });
  }
  
  // Requerimiento 6: Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el
  // requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola del navegador
  async function mostrarMensaje() {
    const mensaje = await enviarInformacion();
    console.log(mensaje);
    
    // Mostrar el mensaje en el HTML
    const mensajeElemento = document.getElementById('mensaje');
    mensajeElemento.textContent = mensaje;
  }
  
  // Llamando a las funciones principales
  (async function() {
    await obtenerDatos();
    await mostrarMensaje();
  })();
  
  
  