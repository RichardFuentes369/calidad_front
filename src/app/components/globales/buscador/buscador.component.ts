import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-globales-buscador',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {

  @Input()
  icon: string = 'fa fa-filter';  
  isFilterVisible: string = 'd-none';
  clickeado:boolean = false

  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.clickeado = !this.clickeado
    if(this.clickeado == true){
      this.isFilterVisible = ''
    }else{
      this.isFilterVisible = 'd-none'
    }
    this.buttonClick.emit();
  }  

}
