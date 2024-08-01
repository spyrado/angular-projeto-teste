import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-dados-cadastrais',
  templateUrl: './form-dados-cadastrais.component.html',
  styleUrls: ['./form-dados-cadastrais.component.scss']
})
export class FormDadosCadastraisComponent {
  
  form: FormGroup = this.buildForm();

  constructor(private fb: FormBuilder) {}

  buildForm(): FormGroup<any> {
    return this.fb.group({
      nome: [undefined],
      idade: [undefined],
      genero: [undefined],
    });
  }
}
