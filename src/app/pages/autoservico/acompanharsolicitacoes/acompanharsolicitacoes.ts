import { Component } from '@angular/core';
import { Transferenciaassentamento } from "../criarsolicitacao/transferenciaassentamento/transferenciaassentamento";
import { Desbloqueio } from "../criarsolicitacao/desbloqueio/desbloqueio";
import { Atualizacaounidadefamiliar } from "../criarsolicitacao/atualizacaounidadefamiliar/atualizacaounidadefamiliar";
import { Atualizacaodadospessoais } from "../criarsolicitacao/atualizacaodadospessoais/atualizacaodadospessoais";
import { Atualizacaosituacao } from "../criarsolicitacao/atualizacaosituacao/atualizacaosituacao";
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb';
import { RouterModule } from '@angular/router';
import { Resultado } from "./resultado/resultado";

declare const core: any;

@Component({
  selector: 'app-acompanharsolicitacoes',
  imports: [Transferenciaassentamento, Desbloqueio, Atualizacaounidadefamiliar, Atualizacaodadospessoais, Atualizacaosituacao, Breadcrumb, RouterModule, Resultado],
  templateUrl: './acompanharsolicitacoes.html',
  styleUrl: './acompanharsolicitacoes.css'
})
export class Acompanharsolicitacoes {

  pageBreadcrumbs = [
    { text: 'Home', address: '/' },
    { text: 'Autosserviço', address: '/autoservico' },
    { text: 'Acompanhar requerimentos', address: '/autoservico/acompanharsolicitacoes' }
  ];

  private scrimfoco: any;
  private buttonActivateModalScrim: HTMLButtonElement | null = null;
  private buttonCloseModalScrim: HTMLButtonElement | null = null;

  esconderTransferenciaAssentamento = true;
  esconderDesbloqueio = true;
  esconderAtualizacaoUnidadeFamiliar = true;
  esconderAtualizacaoDadosPessoais = true;
  esconderAtualizacaoSituacao = true;

  status = '';
  justificativa = '';
  exibirResultado = false;

  ngOnInit(): void {
    // Acessa a classe BRScrim do objeto 'core'
    const scrscrim = window.document.querySelector('#scrimexample');

    if (scrscrim && typeof core !== 'undefined' && core.BRScrim) {
      this.scrimfoco = new core.BRScrim('br-scrim', scrscrim, true);

      this.buttonActivateModalScrim = window.document.querySelector('.modal-btn') as HTMLButtonElement;

      document.querySelectorAll('.modal-btn').forEach((el: Element, index: number) => {
        el.addEventListener('click', (e: any) => {
          this.scrimfoco.showScrim();
        });
      });
    }
  }

  tratarConteudoModal(conteudo: string) {
    this.esconderTransferenciaAssentamento = true;
    this.esconderDesbloqueio = true;
    this.esconderAtualizacaoUnidadeFamiliar = true;
    this.esconderAtualizacaoDadosPessoais = true;
    this.esconderAtualizacaoSituacao = true;

    this.exibirResultado = false;

    switch (conteudo) {
      case "Transferência de assentamento":
        this.esconderTransferenciaAssentamento = false;
        this.status = "Cancelada";
        this.justificativa = "Requerimento cancelado porque dados do beneficiário estão desatualizados.";
        this.exibirResultado = true;
        break;
      case "Desbloqueio":
        this.esconderDesbloqueio = false;
        break;
      case "Atualização de unidade familiar":
        this.esconderAtualizacaoUnidadeFamiliar = false;
        break;
      case "Atualização de dados pessoais":
        this.esconderAtualizacaoDadosPessoais = false;
        this.status = "Deferida";
        this.justificativa = "Atualização de dados pessoais foi deferida e os dados foram atualizados.";
        this.exibirResultado = true;
        break;
      case "Atualização de situação":
        this.esconderAtualizacaoSituacao = false;
        this.status = "Indeferida";
        this.justificativa = "Requerimento indeferido devido a inconsistência na documentação.";
        this.exibirResultado = true;
        break;
    }
  }
}
