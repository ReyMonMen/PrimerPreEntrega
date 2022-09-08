let producto = 0;
let precio = 0;
let id = 1;
const array = []; 

class Obj {
    constructor (producto, precio, id){
        this.producto = producto;
        this.precio = precio;
        this.id = id;
    }

    mostrar(){
        console.log(`producto ${this.producto}, precio ${precio}, Identificador ${id}`);
    }
}

let ingresarProducto = function () {
    producto = prompt(`Ingrese el nombre del producto ${id}`);
    if (producto !== "666"){
        precio = parseInt(prompt(`Ingrese el precio del producto Nro ${id}`));
    }   
}



while (producto != 666) {
     ingresarProducto ();
    if (producto != 666){
        if ((prompt("ingrese s para crear el producto") == 's')) {
            let crear = new Obj(producto, precio, id);
            alert("Producto creado");
            crear.mostrar();
            let mensaje = (`Producto ${crear.producto}, Precio ${crear.precio}, Identificador ${crear.id}`);
            alert(mensaje);
            array.push(crear);
            id++
        } else{
            alert("No se creo el producto");
    }
    }
 }

for(const item of array){
    console.log(item);
}







