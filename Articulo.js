export default class Articulo {
    constructor(articulo) {
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre;
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
    }

    get codigo() {
        return this._codigo;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(val) {
        if (val <= 0 || sNaN(val)) {
            val = 0
        } else {
            val = this._precio;
        }
        return val
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(val) {
        if (val <= 0 || sNaN(val)) {
            val = 0;
        } else {
            val = this._cantidad;
        }
        return val
    }

    get descripcion() {
        return this._descripcion;
    }

    toString() {
        let dato = `Se añadio el articulo: ${this._nombre}  con un valor de: 
        ${this._precio} pesos, la cantidad de este articulo es de ${this._cantidad}`
        return dato
    }
}