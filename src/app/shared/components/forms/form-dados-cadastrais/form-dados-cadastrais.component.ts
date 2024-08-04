import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-dados-cadastrais',
  templateUrl: './form-dados-cadastrais.component.html',
  styleUrls: ['./form-dados-cadastrais.component.scss']
})
export class FormDadosCadastraisComponent implements OnInit {
  
  form: FormGroup = this.buildForm();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.listenForGeneroChange();
  }

  private listenForGeneroChange() {
    this.form
      .get('genero')
      ?.valueChanges
      .subscribe(genero => this.onChangeGenero())
  }

  onChangeGenero(): void {
    // this.form.
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({
      nome: [undefined],
      idade: [undefined],
      genero: [undefined],
      data_aniversario: [undefined],
    });
  }
}
