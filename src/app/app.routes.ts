import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Autoservico } from './pages/autoservico/autoservico';
import { Criarsolicitacao } from './pages/autoservico/criarsolicitacao/criarsolicitacao';
import { Solicitacaogerada } from './pages/autoservico/solicitacaogerada/solicitacaogerada';
import { Acompanharsolicitacoes } from './pages/autoservico/acompanharsolicitacoes/acompanharsolicitacoes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'autoservico', component: Autoservico },
  { path: 'autoservico/criarsolicitacao', component: Criarsolicitacao },
  { path: 'autoservico/solicitacaogerada', component: Solicitacaogerada },
  { path: 'autoservico/acompanharsolicitacoes', component: Acompanharsolicitacoes },
  { path: '**', redirectTo: '' } // optional fallback
];