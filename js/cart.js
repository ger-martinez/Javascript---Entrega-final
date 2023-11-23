const showCart = document.querySelector(".showCart")
const vaciarCart = document.querySelector(".eliminarTotal")

const eliminarTotal =()=>{
    localStorage.removeItem("cart")
    showCart.innerHTML = ""
}
vaciarCart.addEventListener("click", eliminarTotal)

const vaciarCarrito = (e) => {
    //verifica que boton se apreto
    const eleccion = e.target.getAttribute("data-id");
    //manda la alerta
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Esta acción eliminará el producto del carrito.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'

    }).then((result) => {
        //verifica el resultado
        if (result.isConfirmed) {
            // Eliminar el producto del carrito
            cart = cart.filter((product) => product.marca != eleccion);
            localStorage.setItem("cart", JSON.stringify(cart));
            mostrarCarrito();
        }
    });
  };
  const mostrarCarrito = () => {
    showCart.innerHTML = "";
    cart.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card-carrito");
        card.innerHTML = `
        <p class="card-brand">${product.marca}</p>
        <p class="card-title">${product.modelo}</p>
        <p class="card-price">$${product.precio}</p>
        <button data-id="${product.marca}" class="btn btn-danger vaciarCarrito" > <i class="fa-solid fa-trash-can" style="color: #ffffff;"></i> Eliminar</button>
  `;  
  showCart.appendChild(card);
  const total = cart.reduce((accumulator,product)=> accumulator + product.precio, 0)
  const totalPriceElement = document.getElementById("precioTotal")
  totalPriceElement.innerHTML = `Total: $${total}`
  });
    
    if (cart.length > 0) {
      const eliminarCarrito = document.querySelectorAll(".vaciarCarrito");
      eliminarCarrito.forEach((button) => {
        button.addEventListener("click", vaciarCarrito
        );
      });
    }
  };  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  mostrarCarrito();
  
  document.getElementById("btnRealizarCompra").addEventListener("click", function() {
    Swal.fire({
        title: 'Compra realizada',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
});