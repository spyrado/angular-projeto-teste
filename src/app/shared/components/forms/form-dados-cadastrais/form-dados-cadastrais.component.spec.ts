import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosCadastraisComponent } from './form-dados-cadastrais.component';

describe('FormDadosCadastraisComponent', () => {
  let component: FormDadosCadastraisComponent;
  let fixture: ComponentFixture<FormDadosCadastraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDadosCadastraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDadosCadastraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
