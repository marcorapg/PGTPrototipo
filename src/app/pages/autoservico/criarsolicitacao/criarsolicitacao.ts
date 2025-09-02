import { AfterViewInit, Component } from '@angular/core';
import { Breadcrumb } from "../../../layout/breadcrumb/breadcrumb";

@Component({
  selector: 'app-criarsolicitacao',
  imports: [Breadcrumb],
  templateUrl: './criarsolicitacao.html',
  styleUrl: './criarsolicitacao.css'
})
export class Criarsolicitacao implements AfterViewInit {
  pageBreadcrumbs = [
    { text: 'Home', address: '/' },
    { text: 'Autosserviço', address: '/autoservico' },
    { text: 'Criar solicitação', address: '/criarsolicitacao' }
  ];
  ngAfterViewInit() {
    const core = (window as any).core;
    document.querySelectorAll('.br-wizard').forEach((el: Element, index: number) => {
      new core.BRWizard(`wizard-${index}`, el);
    });
  }
}