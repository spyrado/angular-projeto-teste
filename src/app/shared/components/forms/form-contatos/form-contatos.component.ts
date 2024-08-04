import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-contatos',
  templateUrl: './form-contatos.component.html',
  styleUrls: ['./form-contatos.component.scss']
})
export class FormContatosComponent {
  
  form: FormGroup = this.buildForm();

  constructor(private fb: FormBuilder) {}

  buildForm(): FormGroup<any> {
    return this.fb.group({
      email: [undefined],
      telefone: [undefined],
      site: [undefined],
    });
  }
}
