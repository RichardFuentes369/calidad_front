import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHistoricoComponent } from './editar-historico.component';

describe('EditarHistoricoComponent', () => {
  let component: EditarHistoricoComponent;
  let fixture: ComponentFixture<EditarHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
