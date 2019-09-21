export default class Registro {
    constructor(tabla) {
        this._tabla = tabla;
        this._lista = [];
    }


    _eliminarArticulo(row, articulo) {
        Swal.fire({
            type: "question",
            title: "Eliminar este articulo",
            text: articulo.nombre,
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No"
        }).then(result => {
            if (result.value) {
                let pos = this._buscarArticulo(articulo.codigo);
                this._lista.splice(pos, 1);
                row.remove();
            }
        })
    }

    _botonDeELiminar(row, articulo) {

        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = "Eliminar";
        btnDelete.className = "btn btn-danger";

        btnDelete.addEventListener("click", () => {
            this._eliminarArticulo(row, articulo)
        });
        row.cells[5].innerHTML = "";
        row.cells[5].appendChild(btnDelete)

    }


    _agregarTabla(articulo) {
        let row = this._tabla.insertRow(-1);
        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4)
        row.insertCell(5);

        cellCodigo.innerHTML = articulo.codigo
        cellNombre.innerHTML = articulo.nombre
        cellPrecio.innerHTML = articulo.precio
        cellCantidad.innerHTML = articulo.cantidad
        cellDescripcion.innerHTML = articulo.descripcion

        this._botonDeELiminar(row, articulo)

        let objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            arituclo: descripcion

        };

        this._lista.push(objArticulo);
        console.log(this._lista)
    }

    _buscarArticulo(buscador) {
        let result = -1;
        this._lista.forEach(
            (articulo, index) => {
                if (articulo.nombre === buscador) {
                    result = index;
                    alert("el articulo existe")
                    return;
                }else{
                    alert("el ar articulo no existe")
                }
            });

        return result;
    }

    /*agregarUnArticulo(articulo) {
        if (this._buscarArticulo(articulo.nombre) >= 0) {
            Swal.fire({
                type: "error",
                title: "Error",
                text: "Este Articulo ya existe"
            });

            return;
        }
        this._agregarTabla(articulo);
        Swal.fire({
            type: "success",
            title: "Correcto",
            text: "El Articulo se agregó correctamente"
        });

    }*/
}