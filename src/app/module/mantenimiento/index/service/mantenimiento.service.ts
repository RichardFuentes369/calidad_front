import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor() { }

  // orden
  async getDataOrden(id: string){
    let complemento = 'zona/obtener-zona/'
    let urlCopleta = environment.apiUrl+complemento+id

    return await axios.request({
      method: 'get',
      url: urlCopleta,
    })
  }

  async createOrden(data: any){
    let complemento = 'zona/crear-zona/'
    let urlCopleta = environment.apiUrl+complemento

    return await axios.request({
      method: 'post',
      url: urlCopleta,
      data: data,
    })
  }

  async updateOrden(data: any, id: string){
    let complemento = `zona/editar-zona/${id}`
    let urlCopleta = environment.apiUrl+complemento

    return await axios.request({
      method: 'patch',
      url: urlCopleta,
      data: data,
    })
  }

  async deleteOrden(id: string){
    let complemento = 'zona/eliminar-zona/'
    let urlCopleta = environment.apiUrl+complemento+id

    return await axios.request({
      method: 'delete',
      url: urlCopleta,
    })
  }


  // historico
  async getDataOrdenHistorico(id: string){
    let complemento = 'zona/obtener-zona/'
    let urlCopleta = environment.apiUrl+complemento+id

    return await axios.request({
      method: 'get',
      url: urlCopleta,
    })
  }

  async createOrdenHistorico(data: any){
    let complemento = 'zona/crear-zona/'
    let urlCopleta = environment.apiUrl+complemento

    return await axios.request({
      method: 'post',
      url: urlCopleta,
      data: data,
    })
  }

  async updateOrdenHistorico(data: any, id: string){
    let complemento = `zona/editar-zona/${id}`
    let urlCopleta = environment.apiUrl+complemento

    return await axios.request({
      method: 'patch',
      url: urlCopleta,
      data: data,
    })
  }

  async deleteOrdenHistorico(id: string){
    let complemento = 'zona/eliminar-zona/'
    let urlCopleta = environment.apiUrl+complemento+id

    return await axios.request({
      method: 'delete',
      url: urlCopleta,
    })
  }
}
