import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProveedorService } from '@module/proveedor/index/service/proveedor.service';
import { Router } from '@angular/router';
import { ocultarModalOscura } from '@functions/System'

interface crearUsuario {
  "razonSocial": string,
  "telefono": string,
  "email": string,
  "estado": string,
  "nit": string
}

@Component({
  selector: 'app-crear-proveedor',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './crear-proveedor.component.html',
  styleUrl: './crear-proveedor.component.scss'
})
export class CrearProveedorComponent {

  constructor(
    private router: Router,
    private proveedorService: ProveedorService,
    private translate: TranslateService
  ){}

  model = {
    razonSocial: '',
    telefono: '',
    email: '',
    estado: '',
    nit: ''
  }

  goTo (url: string, _id: number){

    if(_id != 0){
      this.router.navigate([url], { queryParams: { id: _id } });
    }else{
      this.router.navigate([url]);
    }

  }

  async crearProveedor(){

    // let complemento = localStorage.getItem('profile')
    // let endPoint

    // if(complemento == 'admin'){
    //   endPoint = this.principalService
    // }else{
    //   endPoint = this.finalService
    // }

    // await endPoint.createUser(this.model)
    // .then(response=>{
    //   ocultarModalOscura()
    //   this.translate.get('pages-usuarios.Swal.TitleAreYouSure').subscribe((translatedTitle: string) => {
    //     localStorage.removeItem('profile')
    //     Swal.fire({
    //       title: this.translate.instant('pages-usuarios.Swal.TitleCreate'),
    //       text: this.translate.instant('pages-usuarios.Swal.TitleRegisterCreate'),
    //       icon: "success"
    //     });
    //   });
    // }).catch(err =>{
    //   console.log(err)
    //   Swal.fire({
    //     title: err.response.data.message,
    //     text: err.response.data.error,
    //     icon: 'error',
    //     confirmButtonText: 'Cool'
    //   })
    // })

  }
}
