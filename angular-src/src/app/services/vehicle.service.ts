import { Injectable } from '@angular/core';

const vehicles = [
  {
      id: 1,
      nombre: 'Jose',
      ruta: 'Z16',
      producto: 'Cereales',
      cliente: 'Wallmart',
      estatus: 'en ruta'
  },
  {
      id: 2,
    nombre: 'Erick',
    ruta: 'Z14',
    producto: 'Jugos',
    cliente: 'La Torre',
    estatus: 'entragado'
  },
  {
      id: 3,
    nombre: 'Marco',
    ruta: 'Z1',
    producto: 'Carne',
    cliente: 'Pricemart',
    estatus: 'enviado'
  },
];

@Injectable()
export class VehicleService {

  private vehicles;

  constructor() {
    this.vehicles = vehicles;
  }

  getVehicles() {
    return this.vehicles;
  }

}
