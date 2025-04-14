import { Component } from '@angular/core';
import { BuscadorComponent } from '@component/globales/buscador/buscador.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [
    TranslateModule,
    BuscadorComponent,
  ],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.scss'
})
export class FiltroMantenimientoComponent {

}
