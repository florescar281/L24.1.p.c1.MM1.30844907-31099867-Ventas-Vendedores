export default class Cl_Vendedores {
    constructor(n, mV) {
        this.nombre = n;
        this.montoVenta = mV;
    }

    set montoVenta(mV) {
        this._montoVenta = mV;
    }   

    set nombre(n) {
        this._nombre = n;
    }

    get montoVenta() {
        return this._montoVenta;
    }

    get nombre() {
        return this._nombre;
    }
}