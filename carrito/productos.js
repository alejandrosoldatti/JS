

class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre; 
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; 
    }
}

const iphoneXsMax = new Producto(1, "Iphone XS MAX", 750, "img/kindpng_1492280.png");
const iphoneSe = new Producto(2, "Iphone SE 2022", 550, "img/i_Phone_SE_128_Red_min_c40aaf4019.png");
const appleWatchUltra = new Producto(3, "Apple watch ultra", 1399, "img/ultra2.png");
const appleWatchSerie = new Producto(4, "Apple watch serie 3", 400, "img/White-Apple-Watch-Transparent-Image.png");
const iphoneProMax = new Producto(5, "Iphone 14 PRO MAX", 1500, "img/iphone-14-pro.png");
const macBookAirPro = new Producto(6, "MacBook Air PRO", 2000, "img/Macbook-PNG-Photo-Clip-Art-Image.png");
const iphonePro = new Producto(7,"Iphone 13 PRO", 1100, "img/13.png");
const airPodsPro = new Producto(8, "AirPods PRO 2", 500, "img/Airpods.png");


 const productos = [iphoneXsMax, iphoneSe, appleWatchUltra, appleWatchSerie, iphoneProMax, macBookAirPro, iphonePro, airPodsPro];

 
let carrito = [];


if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}



const contenedorProductos = document.getElementById("contenedorProductos");

// Ver productos
const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text"> ${producto.precio} </p>
                <button class="btn colorBoton" id="boton${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
        `
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito: 
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        })
    })
}
/*const mostrarProductos = async () => {
    const productos = await fetch ("productos.json")
    const productosJson = await productos.json()
    // console.log(productosJson)
   
    productosJson.forEach(producto=> {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text"> ${producto.precio} </p>
                <button class="btn colorBoton" id="boton${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
        `
        contenedorProductos.appendChild(card);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.json)
        })
    })
}
*/


//Producto al carrito 

/*const agregarAlCarrito = (id) => {
   
    productosJson.forEach (productos.json)
    // productosJson.forEach((producto) => producto.id === id)
    // const productos = productos.forEach((producto) => producto.id === id);
    const productoEnCarrito = carrito.forEach((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
      
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    calcularTotal();
}
*/



//PROFERSOR, LE VOY A HABLAR DE PERSONA A PERSONA, NO LOGRE POR VARIOS DIAS HACER QUE FUNCIONE MI CODIGO
//INTENTO REEMPLAZAR LA CLASS PRODUCTOS POR UN ARCHIVO .JSON LLAMANDOLO POR MEDIO DE ASYNC Y AWAIT
//Y NO LO ESTOY LOGRANDO, MANDE AL CHAT DE CODERHOUSE Y A LOS TUTORES, TODOS ME DIJERON, PENSA EN ESTO
//PENSA EN AQUELLO PERO NO ESTOY NECESITANDO ESO, SE QUE LO TENGO QUE DEDUCIR SOLO PERO NO ESTOY PUDIENDO
//NECESITO QUE ME ARREGLE EL CODIGO Y ME DE UNA DEVOLUCION DICIENDOME, ALEJANDRO AHI LO QUE TENES QUE 
//PONER ES ESTO ESTO Y ESTO....Y DECIRME PORQUE, PERDON PROFESOR POR ESTO QUE LE ESTOY PIDIENDO
//PERO ESTOY TOTALMENTE BLOQUEADO, ACA LE ENTREGO MI PROYECTO HASTA DONDE LOGRE HACER QUE FUNCIONE.
//MUCHAS GRACIAS Y PERDON POR LA MOLESTIA.

const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
        //Al final de la clase, guardamos en el localStorage. 
        //Trabajamos con el localStorage: 
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    calcularTotal();
}

mostrarProductos();

//Carrito ver

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});

//mostrar carrito
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML="";
    carrito.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text"> ${producto.precio} </p>
                <p class="card-text"> ${producto.cantidad} </p>
                <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar Producto </button>
                </div>
            </div>
        `
        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito: 
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}


//Elimina el producto del carrito: 

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Vaciar carrito

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

//Eliminar todo el carrito: 

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    localStorage.clear();
}

//el total de la compra 




const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach((producto) => {
        totalCompra += producto.precio * producto.cantidad;
    })

     total.innerHTML = `   $${totalCompra}`    
}
/*let totalDeLaCompra = document.getElementById("totalDeLaCompra")
totalDeLaCompra.addEventListener("click", () =>{
    let totalCompra = 0;
    totalCompra += productos.precio * productos.cantidad;
})
*/