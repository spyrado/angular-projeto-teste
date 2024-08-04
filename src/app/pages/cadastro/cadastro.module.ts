import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormDadosCadastraisModule } from 'src/app/shared/components/forms/form-dados-cadastrais/form-dados-cadastrais.module';
import { FormEnderecoModule } from 'src/app/shared/components/forms/form-endereco/form-endereco.module';
import { FormContatosModule } from 'src/app/shared/components/forms/form-contatos/form-contatos.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MatTabsModule,
    FormDadosCadastraisModule,
    FormEnderecoModule,
    FormContatosModule
  ]
})
export class CadastroModule { }
