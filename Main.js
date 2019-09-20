import Registro from "./Registros.js";
import Articulo from "./Articulo.js"

export default class Main {
    constructor() {
        let registro = new Registro(
            document.querySelector("#tabla")
        )
        document.querySelector("#agregar").addEventListener("click", () => {
            let codigo = Number(document.querySelector("#codigo").value);
            let nombre = document.querySelector("#nombre").value;
            let precio = Number(document.querySelector("#precio").value);
            let cantidad = Number(document.querySelector("#cantidad").value)
            let descripcion = document.querySelector("#descripcion").value;
            let articuloObj = {
                codigo: codigo,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion
            }
            let articulo = new Articulo(articuloObj);
            registro._agregarTabla(articulo);
            console.log("Se añadio un articulo con exito");
        })

        document.querySelector("#borrar").addEventListener("click", () => {
            let borrar = Number(document.querySelector("#codigoBorrado").value)
            
            registro._eliminarArticulo(borrar)
            

        })
    }
}

var main = new Main();