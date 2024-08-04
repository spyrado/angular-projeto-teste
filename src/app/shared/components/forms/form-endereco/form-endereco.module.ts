import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEnderecoComponent } from './form-endereco.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    FormEnderecoComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports: [
    FormEnderecoComponent
  ]
})
export class FormEnderecoModule { }
