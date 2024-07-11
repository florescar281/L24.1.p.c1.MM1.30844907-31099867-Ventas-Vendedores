/*
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75) 
*/

import Cl_Vendedores from "./Cl_Vendedor.js";
import Cl_Venta from "./Cl_Venta.js";

const salida = document.getElementById("salida");

let ventas = new Cl_Venta();

let vendedor1 = new Cl_Vendedores("Mary", 150);
let vendedor2 = new Cl_Vendedores("José", 135);
let vendedor3 = new Cl_Vendedores("Carlos", 160);
let vendedor4 = new Cl_Vendedores("Pedro", 75);

ventas.procesarVendedor(vendedor1);
ventas.procesarVendedor(vendedor2);
ventas.procesarVendedor(vendedor3);
ventas.procesarVendedor(vendedor4);

salida.innerHTML = `
    La cantidad de ventas menores 0 iguales a 100$ son: ${ventas.devolverContVentasMenores()}<br>
    La cantidad de ventas mayores a 100$ son: ${ventas.devolverContVentasMayores()}<br>
    El monto total de las ventas son: ${ventas.devolverMontoVentas()}$
`;