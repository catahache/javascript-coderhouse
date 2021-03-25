let listaCompra = [];
let rowProductos = document.getElementById("productosRow");
let buttonProd; //btn de compra
let modalLista = document.getElementById("modalLista");
let item = document.createElement("li"); //li en carrito de compra
let buttonHamburguer = document.getElementById("buttonHamburguer"); //hamburguer menu mobile
let buttonShop = document.getElementById("buttonShop"); //button shop collapse nav-bar
let collapseShop = document.getElementById("collapseShop");
let modalListaIndex = document.getElementById("modalListaIndex");
let itemIndex; //li en carrito de compra index
//window.location.pathname

for (const producto of PRODUCTOS) {
    //PRODUCTOS json
    let stock = producto.stock;

    if (stock > 0) {
        var isStock = true;
    } else {
        var isStock = false;
    }

    if (window.location.pathname == "/pages/tienda.html") {
        mostrarCardProducto(producto, isStock);
    }
}

function mostrarCardProducto(producto, isStock) {
    let divCol = document.createElement("div");
    divCol.classList.add("card-producto");
    rowProductos.appendChild(divCol);

    let cardH2 = document.createElement("h2");
    cardH2.innerHTML = producto.nombre;
    divCol.appendChild(cardH2);

    let cardP = document.createElement("p");
    cardP.innerHTML = producto.descripcion;
    divCol.appendChild(cardP);

    let imgProd = document.createElement("div");
    imgProd.style.backgroundImage = `url(${producto.imagen})`;
    imgProd.classList.add("pic-producto");
    divCol.appendChild(imgProd);

    let colorsProd = document.createElement("div");
    colorsProd.classList.add("colors-producto");
    divCol.appendChild(colorsProd);

    //recorro colores:
    let contador = 0;
    producto.colores.forEach((color) => {
        let spanColor = document.createElement("span");
        spanColor.classList.add(color);
        //TODO hacer un data-pic="url(image/1.png)" en cada span que haga que la img cambie depende el span que se toque

        if (contador == 0) {
            spanColor.classList.add("active");
        }
        colorsProd.appendChild(spanColor);
        contador++;
    });

    let infoProd = document.createElement("div");
    infoProd.classList.add("info-producto");
    divCol.appendChild(infoProd);

    let precioProd = document.createElement("div");
    precioProd.classList.add("price-producto");
    precioProd.innerHTML = `$ ${producto.precio}`;
    infoProd.appendChild(precioProd);

    buttonProd = document.createElement("a");
    buttonProd.classList.add("button-producto");
    buttonProd.innerHTML = "Add to cart";
    infoProd.appendChild(buttonProd);
    if (!isStock) {
        deshabilitarBoton(buttonProd, "Sin stock", "#bbb");
    }

    agregarProductoACompra(buttonProd, producto, isStock); //listener buttonProd
}

function agregarProductoACompra(buttonProd, producto, isStock) {
    buttonProd.addEventListener("click", () => {
        if (isStock) {
            if (producto.stock > 0) {
                //TODO notificacion a la derecha popup
                producto.stock -= 1;
                listaCompra.push(producto);

                dibujarProductoEnCarrito(listaCompra);

                if (producto.stock == 0) {
                    deshabilitarBoton(buttonProd, "Sin stock", "#bbb");
                }
            }
        }
    });
}

function deshabilitarBoton(button, mensaje, color) {
    button.innerHTML = mensaje;
    button.style.color = color;
    button.style.cursor = "default";
    button.style.pointerEvents = "none";
}

function dibujarProductoEnCarrito(listaCompra) {
    console.log(modalLista);
    //TODO si es el mismo prod, que sume al mismo item de la lista
    modalLista.innerHTML = ""; //limpio
    console.log(modalLista);

    let btnEliminar;
    let total = 0;

    for (const producto of listaCompra) {
        let liItem = document.createElement("li");
        liItem.innerHTML = `<p class="d-inline item-lista-compra" >${producto.nombre} - ${producto.precio}</p>`;
        modalLista.appendChild(liItem);

        btnEliminar = document.createElement("button");
        btnEliminar.innerHTML = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.setAttribute("data-id", `${producto.id}`);
        liItem.appendChild(btnEliminar);

        total = total + parseInt(producto.precio);
    }

    if (listaCompra.length > 0) {
        let totalP = document.createElement("p");
        totalP.innerHTML = `Total: $ ${total}`;
        modalLista.appendChild(totalP);
    } else {
        liItem = document.createElement("li");
        liItem.innerHTML = "<p>No tenes productos en el carrito</p>";
        modalLista.appendChild(item);
    }
}

// event delegation
document.addEventListener("click", function (e) {
    if (e.target && e.target.className == "btn-eliminar") {
        let id = e.target.getAttribute("data-id"); //toma el id del prod a eliminar

        const indexProdEliminar = listaCompra.findIndex(
            (producto) => producto.id == id
        );

        listaCompra.splice(indexProdEliminar, 1);
        // localStorage.listaCompra = JSON.stringify(listaCompra);
        dibujarProductoEnCarrito(listaCompra); //vuelvo a listar con li removido
    }
});

buttonHamburguer.addEventListener("click", () => {
    buttonShop.setAttribute("aria-expanded", "false");
    buttonShop.classList.add("collapsed");
    collapseShop.classList.remove("show");
});
