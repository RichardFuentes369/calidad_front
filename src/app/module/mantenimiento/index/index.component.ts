import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PipesModule } from '@pipe/pipes.module';
import { AuthService } from '@guard/service/auth.service';
import { PermisosService } from '@service/globales/permisos/permisos.service';

import Swal from 'sweetalert2'

import { TablecrudComponent } from '@component/globales/tablecrud/tablecrud.component';
import { ModalBoostrapComponent } from '@component/globales/modal/boostrap/boostrap.component';
import { LoadingComponent } from '@component/globales/loading/loading.component';

import { MantenimientoService } from './service/mantenimiento.service';

@Component({
  selector: 'app-mantenimiento-index',
  standalone: true,
  imports: [
    CommonModule, 
    PipesModule, 
    TranslateModule,
    TablecrudComponent,
    ModalBoostrapComponent,
    LoadingComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  constructor(
    private router: Router,
    private userService :AuthService,
    private permisosService :PermisosService,
    private mantenimientoService :MantenimientoService,
    private translate: TranslateService
  ) { }

  permisos: any[] = []

  async ngOnInit() {
    await this.userService.refreshToken('authadmin');
    const userData = await this.userService.getUser('authadmin');
    const modulo = await this.permisosService.permisos(userData.data.id,'mantenimiento')
    this.permisos = modulo.data
  }

    // inicio datos que envio al componente tabla
    columnas = [
      {
        title: 'ID',
        data: 'id',
      },
      {
        title: 'Description',
        data: 'descripcion',
      },
      {
        title: 'Description',
        data: 'descripcion',
      },
      {
        title: 'maintenance_at',
        data: 'fecha_mantenimiento',
      },
      {
        title: 'Status',
        data: 'estado',
      },
      {
        title: 'Price',
        data: 'precio',
      },
      {
        title: 'Created At',
        data: 'fecha_creacion',
      },
      {
        title: 'Updated At',
        data: 'fecha_actualizacion',
      },
    ]
    permisosAcciones = this.permisos
    // fin datos que envio al componente tabla

    tamano = ""
    scrollable = false
    title = ""
    save = true
    buttonSave = "Guardar"
    edit = true
    buttonEdit = "Editar"
    cancel = true
    buttonCancel = "Cancelar"
    cierreModal = "true"
    componentePrecargado = ""

    crearData (_id: string){
      localStorage.setItem('profile', 'admin')
      this.tamano = "xl"
      this.scrollable = false
      this.title = "Crear orden"
      this.save = true
      this.buttonSave = "Guardar"
      this.edit = false
      this.buttonEdit = "Editar"
      this.cancel = true
      this.buttonCancel = "Cancelar"
      this.cierreModal = "true"
      this.componentePrecargado = "CrearMantenimientoComponent"
  
      const idButton = document.getElementById('miBoton')
      if(idButton){
        idButton.setAttribute('componente', this.componentePrecargado);
        idButton.click()
      }
    }
  
    verData (_id: string){
      this.tamano = "xl"
      this.scrollable = false
      this.title = "Ver orden"
      this.save = false
      this.buttonSave = "Guardar"
      this.edit = false
      this.buttonEdit = "Editar"
      this.cancel = true
      this.buttonCancel = "Cancelar"
      this.cierreModal = "true"
      this.componentePrecargado = "VerMantenimientoComponent"
  
      const idButton = document.getElementById('miBoton')
      if(idButton){
        this.router.navigate([], {
          queryParams: { id: _id },
        });
        idButton.setAttribute('componente', this.componentePrecargado);
        idButton.click()
      }
    }
  
    editarData (_id: string){
      this.tamano = "xl"
      this.scrollable = false
      this.title = "Editar orden"
      this.save = false
      this.buttonSave = "Guardar"
      this.edit = false
      this.buttonEdit = "Editar"
      this.cancel = true
      this.buttonCancel = "Cancelar"
      this.componentePrecargado = "EditarMantenimientoComponent"
  
      const idButton = document.getElementById('miBoton')
      if(idButton){
        this.router.navigate([], {
          queryParams: { id: _id },
        });
        idButton.setAttribute('componente', this.componentePrecargado);
        idButton.click()
      }
    }
  
    @ViewChild(TablecrudComponent)
    someInput!: TablecrudComponent
    eliminarData (_id: string){
      console.log("eliminarData "+_id)
      this.translate.get('pages-mantenimiento.Swal.TitleAreYouSure').subscribe((translatedTitle: string) => {
        Swal.fire({
          title: translatedTitle,
          text: this.translate.instant('pages-mantenimiento.Swal.TitleWarnigRevert'),
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: this.translate.instant('pages-mantenimiento.Swal.TitleDelete'),
          cancelButtonText: this.translate.instant('pages-mantenimiento.Swal.TitleCancel')
        }).then(async (result) => {
          if (result.isConfirmed) {
              if (result.isConfirmed) {
                await this.mantenimientoService.deleteOrden(_id)
                await this.someInput.reload()
                Swal.fire({
                  title: this.translate.instant('pages-mantenimiento.Swal.TitleDelete'),
                  text: this.translate.instant('pages-mantenimiento.Swal.TitleRegisterDeleted'),
                  icon: "success"
                });
              }
          }
        });
      });
    }
  
    async refrescarTabla (){
      setTimeout(async () => {
        await this.someInput.reload()
      }, 100);
    }
}
