import { CrearUsuariosComponent } from './users/components/crear-usuarios/crear-usuarios.component';
import { EditarUsuariosComponent } from "./users/components/editar-usuarios/editar-usuarios.component";
import { VerUsuariosComponent } from "./users/components/ver-usuarios/ver-usuarios.component";

import { CrearZonaComponent } from './zonaComun/components/crear-zona/crear-zona.component';
import { VerZonaComponent } from './zonaComun/components/ver-zona/ver-zona.component';
import { EditarZonaComponent } from './zonaComun/components/editar-zona/editar-zona.component';

import { CrearProveedorComponent } from './proveedor/components/crear-proveedor/crear-proveedor.component';
import { VerProveedorComponent } from './proveedor/components/ver-proveedor/ver-proveedor.component';
import { EditarProveedorComponent } from './proveedor/components/editar-proveedor/editar-proveedor.component';

export class ListaComponentes {

  /*
  * Componentes forzados a cargar en los modals
  */
  componentes: any[] = [
    // usuarios
    {
      name: 'CrearUsuariosComponent',
      componente: CrearUsuariosComponent
    },
    {
      name: 'VerUsuariosComponent',
      componente: VerUsuariosComponent
    },
    {
      name: 'EditarUsuariosComponent',
      componente: EditarUsuariosComponent
    },

    // zona comun
    {
      name: 'CrearZonaComponent',
      componente: CrearZonaComponent
    },
    {
      name: 'VerZonaComponent',
      componente: VerZonaComponent
    },
    {
      name: 'EditarZonaComponent',
      componente: EditarZonaComponent
    },

    // proveedores
    {
      name: 'CrearProveedorComponent',
      componente: CrearProveedorComponent
    },
    {
      name: 'VerProveedorComponent',
      componente: VerProveedorComponent
    },
    {
      name: 'EditarProveedorComponent',
      componente: EditarProveedorComponent
    }
  ];

  obtenerComponentePorNombre(nombre: string) {
    return this.componentes.find(comp => comp.name === nombre);
  }
}
