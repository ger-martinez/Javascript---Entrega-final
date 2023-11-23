
document.addEventListener("DOMContentLoaded", function() {
    const showProductContainer = document.querySelector(".showProductContainer");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
      fetch("../js/stock.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((product) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
            <div class="card brandcard col-sm-12 col-md-6 col-lg-4" style="width: ;">
              <img src="${product.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="">${product.marca}</h5>
                <h6 class="">${product.modelo}</h6>
                <p class="">${product.descripcion}</p>
                <p class="">$${product.precio}</p>
                <a href="#" class="btn btn-primary add-to-cart">Agregar al carrito</a>
              </div>
            </div>
          `;  
          showProductContainer.appendChild(card);  
          const addToCartButton = card.querySelector(".add-to-cart");
          addToCartButton.addEventListener("click", () => {
            const productToAdd = {
              id: product.id,
              marca: product.marca,
              modelo: product.modelo,
              precio: product.precio,
            };  
            cart.push(productToAdd);
            localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
              icon: "success",
              title: "Exito!",
              toast:true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1000,              
              text: "Producto agregado al carrito!",              
            });            
          });
        });
      })      
.catch((error) => console.log("error al cargar el archivo JSON", error));
});
