export default class Registro {
    constructor(tabla) {
        this._tabla = tabla;
        this._lista = [];
    }
    get lista() {
        return this._lista;
    }
    _agregarTabla(articulo) {

        let row = this._tabla.insertRow(-1)
        let cellTabla = row.insertCell(0);

        cellTabla.innerHTML = articulo.toString();
        let objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            descripcion: articulo.descripcion
        }
        this._lista.push(objArticulo);
        console.log(this._lista)
    }


    _eliminarArticulo(articulo, borrar) {
        if (articulo.codigo == borrar) {
            let pos = this._buscarArticulo(articulo.codigo);
            this._lista.splice(pos, 1);
        }
    }


    _buscarArticulo(codigo) {
        let result = -1;
        this._lista.forEach(
            (articulo, index) => {
                if (articulo.codigo === codigo) {
                    result = index;
                    return;
                }
            });

        return result;

    }

    addArticulo(articulo) {
        if (this._buscarArticulo(articulo.codigo) >= 0) {
            alert("Ya existe")
            return;
        }
        this._agregarTabla(articulo);
        alert("Se agrego")

    }


}