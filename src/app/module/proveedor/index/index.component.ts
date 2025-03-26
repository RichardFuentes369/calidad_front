import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@pipe/pipes.module';

@Component({
  selector: 'app-proveedor-index',
  standalone: true,
  imports: [CommonModule, PipesModule, TranslateModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
