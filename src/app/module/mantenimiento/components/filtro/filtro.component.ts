import { Component } from '@angular/core';
import { SearchComponent } from '@component/globales/search/search.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [
    TranslateModule,
    SearchComponent,
  ],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.scss'
})
export class FiltroMantenimientoComponent {

}
