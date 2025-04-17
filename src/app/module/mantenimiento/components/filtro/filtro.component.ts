import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.scss'
})
export class FiltroMantenimientoComponent {

  complementoFiltro = ''

  model = {
    serial: '',
    descripcion: '',
    precio: '',
    fecha_mantenimiento_inicio: '',
    fecha_mantenimiento_fin: '',
    fecha_creacion: '',
    estado: '',
    zona_id: '',
  }

  limpiar(){
    $(".complementoRuta").val('')
    this.complementoFiltro = ''
    this.model.serial = '',
    this.model.descripcion = '',
    this.model.precio = '',
    this.model.fecha_mantenimiento_inicio = '',
    this.model.fecha_mantenimiento_fin = '',
    this.model.fecha_creacion = '',
    this.model.estado = '',
    this.model.zona_id = ''
  }

  dateToTimestamp(dateString: string) {
    const date = new Date(dateString);
    const timestampMilliseconds = date.getTime();
    return Math.floor(timestampMilliseconds / 1000);
  }
  
  filtrar(){

    if(this.model.serial != ''){
      this.complementoFiltro += `&serial=${this.model.serial}`
    }
    if(this.model.descripcion != ''){
      this.complementoFiltro += `&descripcion=${this.model.descripcion}`
    }
    if(this.model.precio != ''){
      this.complementoFiltro += `&precio=${this.model.precio}`      
    }
    if(this.model.fecha_mantenimiento_inicio != ''){
      let fecha_mantenimiento_inicio = this.dateToTimestamp(this.model.fecha_mantenimiento_inicio)
      this.complementoFiltro += `&fecha_mantenimiento_inicio=${fecha_mantenimiento_inicio}`      
    }    
    if(this.model.fecha_mantenimiento_fin != ''){
      let fecha_mantenimiento_fin = this.dateToTimestamp(this.model.fecha_mantenimiento_fin)
      this.complementoFiltro += `&fecha_mantenimiento_fin=${fecha_mantenimiento_fin}`      
    }    
    if(this.model.fecha_creacion != ''){
      let fecha_creacion = this.model.fecha_creacion
      this.complementoFiltro += `&fecha_creacion=${fecha_creacion}`      
    }   
    if(this.model.estado != ''){
      this.complementoFiltro += `&estado=${this.model.estado}`      
    }    
    if(this.model.zona_id != ''){
      this.complementoFiltro += `&zona_id=${this.model.zona_id}`      
    }

    $(".complementoRuta").val(this.complementoFiltro)
    this.complementoFiltro = ''

  }

}
