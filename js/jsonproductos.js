// TODO usar uniqid
const PRODUCTOS = [
    {
        id: 1,
        nombre: "Quads artistico",
        categoria: "Completos",
        descripcion: "Quads para artistico.",
        imagen: "../images/products/moxi-style-beige-quads.png",
        precio: 7000,
        colores: ["negro", "blanco", "beige", "rosa"],
        material: "Cuero",
        stock: 5,
    },
    {
        id: 2,
        nombre: "Quads bota",
        categoria: "Completos",
        descripcion: "Quads tipo bota para street.",
        imagen: "../images/products/moxi-style-black-quads.png",
        precio: 6000,
        colores: ["negro", "blanco", "azul", "rojo"],
        material: "Tela",
        stock: 5,
    },
    {
        id: 3,
        nombre: "Quads Nike",
        categoria: "Completos",
        descripcion: "Quads zapatilla Nike.",
        imagen: "../images/products/nike-beige-quads.png",
        precio: 700,
        colores: ["negro", "blanco", "beige", "rosa"],
        material: "Cuero ecologico",
        stock: 0,
    },
    {
        id: 4,
        nombre: "Quads Nike",
        categoria: "Completos",
        descripcion: "Quads zapatilla Nike.",
        imagen: "../images/products/nike-black-quads.png",
        precio: 3000,
        colores: ["azul", "rosa", "negro"],
        material: "Cuero ecologico",
        stock: 5,
    },
    {
        id: 5,
        nombre: "Quads abrojo",
        categoria: "Completos",
        descripcion: "Quads con abrojo para street.",
        imagen: "../images/products/pink-quads.png",
        precio: 3000,
        colores: ["rosa", "negro"],
        material: "Cuero ecologico",
        stock: 2,
    },
    {
        id: 6,
        nombre: "Quads Vans",
        categoria: "Completos",
        descripcion: "Quads zapatilla Vans.",
        imagen: "../images/products/vans-black-quads.png",
        precio: 3000,
        colores: ["rosa", "negro"],
        material: "Cuero ecologico",
        stock: 2,
    },
];

const DESCUENTO = [
    { total: 0, factor: 1 }, //sin
    { total: 1, factor: 0.9 }, //10%
    { total: 2, factor: 0.85 }, //15%
    { total: 3, factor: 0.8 }, //20%
    { total: 4, factor: 0.75 }, //25%
];
