import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@pipe/pipes.module';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [
    CommonModule, 
    PipesModule, 
    TranslateModule,
  ],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.scss'
})
export class FiltroProveedorComponent {

}
