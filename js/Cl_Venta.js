export default class Cl_Vendedores
{
    constructor() {
        this.acumVentas = 0;
        this.contVentasMenores = 0;
        this.contVentasMayores = 0;
    }   

    procesarVendedor(v) {
        this.acumVentas += v.montoVenta;
        if (v.montoVenta <= 100) {
            this.contVentasMenores++;
        } else {
            this.contVentasMayores++;
        }
    }

    devolverMontoVentas() {
        return this.acumVentas;
    }

    devolverContVentasMenores() {
        return this.contVentasMenores;
    }   

    devolverContVentasMayores() {
        return this.contVentasMayores;
    }
}