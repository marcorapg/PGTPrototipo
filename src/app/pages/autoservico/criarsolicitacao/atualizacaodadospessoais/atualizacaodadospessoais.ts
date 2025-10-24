import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atualizacaodadospessoais',
  imports: [],
  templateUrl: './atualizacaodadospessoais.html',
  styleUrl: './atualizacaodadospessoais.css'
})
export class Atualizacaodadospessoais {
  @Input() exibirEdicao: boolean = true;
  esconderDadosPessoais = true;

  buscarDadosPessoais() {
    this.esconderDadosPessoais = false;
  }
}
