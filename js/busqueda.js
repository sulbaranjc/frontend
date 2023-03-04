    // Hacer la llamada fetch con async/await
async function getImages() {
  try {
      const response = await fetch('http://localhost:3310/images');
      const images = await response.json();

      // Mostrar las imágenes en tarjetas Bootstrap
      const imagesContainer = document.getElementById('images-container');
      images.forEach(image => {
          const card = `
              <div class="col-lg-3 col-md-4 col-sm-6 ">
                  <div class="card mb-4" style="width: 15rem; height: 45rem;">
                      <img class="card-img-top" src="http://localhost:3310/${image.namefile}" alt="${image.titulo}" style="width: 15rem; height: 26rem;">
                      <div class="card-body">
                          <h5 class="card-title">${image.titulo}</h5>
                          <p class="card-text">${image.descripcion}</p>
                          <p class="card-text">Precio: $${image.precio}</p>
                          <p class="card-text">Existencia: ${image.existencia}</p>
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
