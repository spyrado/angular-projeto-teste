import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: ['./form-endereco.component.scss']
})
export class FormEnderecoComponent {
  
  form: FormGroup = this.buildForm();

  constructor(private fb: FormBuilder) {}

  buildForm(): FormGroup<any> {
    return this.fb.group({
      endereco: [undefined],
      numero: [undefined],
      cidade: [undefined],
      estado: [undefined],
    });
  }
}
