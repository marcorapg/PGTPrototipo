import { Component } from '@angular/core';
import { Breadcrumb } from "../../layout/breadcrumb/breadcrumb";

@Component({
  selector: 'app-autoservico',
  imports: [Breadcrumb],
  templateUrl: './autoservico.html',
  styleUrl: './autoservico.css'
})
export class Autoservico {
  pageBreadcrumbs = [
    { text: 'Home', address: '/' },
    { text: 'Autosserviço', address: '/autoservico' }
  ];
}
