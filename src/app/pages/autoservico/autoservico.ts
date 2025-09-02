import { Component } from '@angular/core';
import { Breadcrumb } from "../../layout/breadcrumb/breadcrumb";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-autoservico',
  imports: [Breadcrumb, RouterModule],
  templateUrl: './autoservico.html',
  styleUrl: './autoservico.css'
})
export class Autoservico {
  pageBreadcrumbs = [
    { text: 'Home', address: '/' },
    { text: 'Autosserviço', address: '/autoservico' }
  ];
}
