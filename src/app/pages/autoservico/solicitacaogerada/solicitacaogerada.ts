import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb';
import { RouterModule } from '@angular/router';

declare const core: any;

@Component({
  selector: 'app-solicitacaogerada',
  imports: [Breadcrumb, RouterModule],
  templateUrl: './solicitacaogerada.html',
  styleUrl: './solicitacaogerada.css'
})
export class Solicitacaogerada {
  pageBreadcrumbs = [
    { text: 'Home', address: '/' },
    { text: 'Autosserviço', address: '/autoservico' },
    { text: 'Solcitação gerada', address: '/autoservico/solicitacaogerada' }
  ];
}