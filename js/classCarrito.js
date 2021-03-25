class Carrito {
    constructor(listaProductosCarrito) {
        //array de prods
        let lista = listaProductosCarrito; //prop privada

        this.calculoTotalCarrito = () => {
            let total = 0;
            for (let producto of lista) {
                total += parseFloat(producto.precio);
            }
            return total;
        };

        this.aplicarDecuento = () => {
            let total = this.calculoTotalCarrito();
            let totalConDescuento = 0;
            const result = DESCUENTO.find((desc) => desc.total == lista.length); //descuento coincidiente
            if (result != undefined) {
                totalConDescuento = total;
            } else {
                totalConDescuento = total * parseFloat(result.factor);
            }
            return totalConDescuento;
        };
    }
}
