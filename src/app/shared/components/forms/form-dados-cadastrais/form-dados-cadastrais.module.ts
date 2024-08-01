import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDadosCadastraisComponent } from './form-dados-cadastrais.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    FormDadosCadastraisComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  exports: [
    FormDadosCadastraisComponent
  ]
})
export class FormDadosCadastraisModule { }
