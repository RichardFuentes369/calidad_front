import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@pipe/pipes.module';

@Component({
  selector: 'app-crear-historico',
  standalone: true,
  imports: [
    CommonModule, 
    PipesModule, 
    TranslateModule,
  ],
  templateUrl: './crear-historico.component.html',
  styleUrl: './crear-historico.component.scss'
})
export class CrearHistoricoComponent {

}
