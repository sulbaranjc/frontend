// Declara una variable entera
let cartCount = 0;
// Obtiene el elemento <span> con id "cart-count"
let cartCountElement = document.getElementById("cart-count"); 
// Actualiza el contenido del elemento <span> con el nuevo valor del contador
cartCountElement.innerHTML = cartCount;

function actualizarContadorCarrito() {
  
    // Obtiene el valor actual del contador y lo convierte a un número entero
    let cartCount = parseInt(cartCountElement.innerHTML);
  
    // Actualiza el contador sumando 1 al valor actual
    cartCount += 1;
  
    // Actualiza el contenido del elemento <span> con el nuevo valor del contador
    cartCountElement.innerHTML = cartCount;
  }


// Hacer la llamada fetch con async/await

async function getImages() {
    const URI = 'http://sulbaranjc.com:3311/';
    const URIFETCH = `${URI}images`;
  try {
      const response = await fetch(URIFETCH);
      const images = await response.json();

      // Mostrar las imágenes en tarjetas Bootstrap
      const imagesContainer = document.getElementById('images-container');
      images.forEach(image => {
          const card = `
              <div class="d-flex justify-content-center align-items-center mx-2 pt-5">
                  <div class="card mb-4" style="width: 21rem; height: 45rem;">
                      <img class="card-img-top mx-auto pt-2 " src=${URI}${image.namefile} alt="${image.titulo}" style="width: 19.8rem; height: 22rem; border-radius: 15px;
                      ">
                      <div class="card-body">
                          <h5 class="card-title">${image.titulo}</h5>
                          <p class="card-text">${image.descripcion}</p>
                          <p class="card-text">Precio: $${image.precio}</p>
                          <p class="card-text">Existencia: ${image.existencia}</p>
                      </div>
                      <div class="card-body d-flex align-items-end">
                      <button type="button" 
                        class="btn btn btn-warning d-block mx-auto mb-3" onclick="actualizarContadorCarrito()">Añadir a la cesta</button>
                  </div> 

                  </div>

              </div>
          `;
          imagesContainer.innerHTML += card;
      });
  } catch (error) {
      console.error(error);
  }
}

// Llamar a la función para obtener las imágenes
getImages();
