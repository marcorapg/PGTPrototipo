import { AfterViewInit, Component } from '@angular/core';
import { Breadcrumb } from "../../../layout/breadcrumb/breadcrumb";
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { Desbloqueio } from "./desbloqueio/desbloqueio";
import { Transferenciaassentamento } from "./transferenciaassentamento/transferenciaassentamento";
import { Atualizacaounidadefamiliar } from "./atualizacaounidadefamiliar/atualizacaounidadefamiliar";
import { Atualizacaosituacao } from "./atualizacaosituacao/atualizacaosituacao";
import { Atualizacaodadospessoais } from "./atualizacaodadospessoais/atualizacaodadospessoais";
import { Emitirespelho } from "./emitirespelho/emitirespelho";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criarsolicitacao',

  imports: [Breadcrumb, FormsModule, NgxMaskDirective, Desbloqueio, Transferenciaassentamento, Atualizacaounidadefamiliar, Atualizacaosituacao, Atualizacaodadospessoais, Emitirespelho, RouterLink],
  templateUrl: './criarsolicitacao.html',
  styleUrl: './criarsolicitacao.css'
})
export class Criarsolicitacao implements AfterViewInit {
  pageBreadcrumbs = [
    { text: 'Home', address: '/' },
    { text: 'Autosserviço', address: '/autoservico' },
    { text: 'Incluir requerimento', address: '/criarsolicitacao' }
  ];
  cpf = '';
  exibirErroNaoEncontrato = true;
  exibirBeneficiarioEncontrado = true;

  servicoSelecionado = '';
  esconderTransferenciaAssentamento = true;
  esconderDesbloqueio = true;
  esconderAtualizacaoUnidadeFamiliar = true;
  esconderAtualizacaoDadosPessoais = true;
  esconderAtualizacaoSituacao = true;
  esconderEmitirEspelho = true;

  ngAfterViewInit() {
    const core = (window as any).core;
    document.querySelectorAll('.br-wizard').forEach((el: Element, index: number) => {
      new core.BRWizard(`wizard-${index}`, el);
    });

    const wizardList = []
    for (const brWizard of window.document.querySelectorAll('.br-wizard')) {
      wizardList.push(new core.BRWizard('br-wizard', brWizard))
    }

    const tableList = []
    for (const [index, brTable] of window.document.querySelectorAll('.br-table').entries()) {
      tableList.push(new core.BRTable('br-table', brTable, index))
    }

    const selectList = [];
    const notFoundElement = `
    <div class="br-item not-found">
      <div class="container">
      <div class="row">
        <div class="col">
        <p><strong>Ops!</strong> Não encontramos o que você está procurando!</p>
        </div>
      </div>
      </div>
    </div>
    `
    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      const brselect = new core.BRSelect('br-select', brSelect, notFoundElement)
      //Exemplo de uso de listener do select
      brSelect.addEventListener('onChange', (e: any) => {
        if (e.srcElement.querySelector('input').id == "select-servico") {
          this.esconderTransferenciaAssentamento = true;
          this.esconderDesbloqueio = true;
          this.esconderAtualizacaoUnidadeFamiliar = true;
          this.esconderAtualizacaoDadosPessoais = true;
          this.esconderAtualizacaoSituacao = true;
          this.esconderEmitirEspelho = true;

          switch (brselect.selected) {
            case "Transferência de assentamento":
              this.esconderTransferenciaAssentamento = false;
              break;
            case "Desbloqueio":
              this.esconderDesbloqueio = false;
              break;
            case "Atualização de unidade familiar":
              this.esconderAtualizacaoUnidadeFamiliar = false;
              break;
            case "Atualização de dados pessoais":
              this.esconderAtualizacaoDadosPessoais = false;
              break;
            case "Atualização de situação":
              this.esconderAtualizacaoSituacao = false;
              break;
            case "Emitir espelho":
              this.esconderEmitirEspelho = false;
              break;
          }
        }
      });
      selectList.push(brselect);
    };

    const datetimepickerList = [];
    for (const brDateTimePicker of window.document.querySelectorAll(
      '.br-datetimepicker'
    )) {
      datetimepickerList.push(
        new core.BRDateTimePicker('br-datetimepicker', brDateTimePicker, { minDate: '15/04/1900', maxDate: '20/04/2099' }
        ));
    };



    const uploadList = []

    function uploadTimeout() {
      return new Promise((resolve) => {
        // Colocar aqui um upload para o servidor e retirar o timeout
        return setTimeout(resolve, 3000)
      })
    }

    for (const brUpload of window.document.querySelectorAll('.br-upload')) {
      uploadList.push(new core.BRUpload('br-upload', brUpload, uploadTimeout))
    }

    // const el = document.getElementById('tab3');

    // if (el) {
    //   const observer = new MutationObserver(() => {
    //     if (el.hasAttribute('active')) {
    //       const core = (window as any).core;
    //       //const wizard = new core.BRWizard('br-wizard', window.document.querySelector('.br-wizard'));
    //       const selectServico = new core.BRSelect('br-select', document.querySelector('div.br-select:has(input#select-servico)'), notFoundElement);
    //       console.log(selectServico.selected);
    //       if(selectServico.selected == "Emitir espelho")
    //         //wizard.setStep(2);
    //     }
    //   });

    //   observer.observe(el, {
    //     attributes: true,
    //     attributeFilter: ['active'],
    //   });
    // }

  };
  pesquisarCPF() {
    console.log('CPF pesquisado:', this.cpf);

    // aqui você pode chamar um serviço, API, etc.
    if (this.cpf != "11111111111") {
      this.exibirErroNaoEncontrato = false;
      this.exibirBeneficiarioEncontrado = true;
    } else {
      this.exibirErroNaoEncontrato = true;
      this.exibirBeneficiarioEncontrado = false;
    }
  }
}