    // Hacer la llamada fetch con async/await
async function getImages() {
  try {
      const response = await fetch('http://sulbaranjc.com:3311/images');
      const images = await response.json();

      // Mostrar las imágenes en tarjetas Bootstrap
      const imagesContainer = document.getElementById('images-container');
      images.forEach(image => {
          const card = `
              <div class="d-flex justify-content-center align-items-center mx-2 pt-5">
                  <div class="card mb-4" style="width: 21rem; height: 45rem;">
                      <img class="card-img-top mx-auto pt-2 " src="http://sulbaranjc.com:3311/${image.namefile}" alt="${image.titulo}" style="width: 19.8rem; height: 22rem; border-radius: 15px;
                      ">
                      <div class="card-body">
                          <h5 class="card-title">${image.titulo}</h5>
                          <p class="card-text">${image.descripcion}</p>
                          <p class="card-text">Precio: $${image.precio}</p>
                          <p class="card-text">Existencia: ${image.existencia}</p>
                      </div>
                      <div class="card-body d-flex align-items-end">
                      <button type="button" class="btn btn btn-warning d-block mx-auto mb-3">Añadir a la cesta</button>
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
