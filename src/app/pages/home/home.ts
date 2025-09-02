import { Component } from '@angular/core';
import { Breadcrumb } from '../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-home',
  imports: [Breadcrumb],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  pageBreadcrumbs = [
    { text: 'Home', address: '/' }
  ];
}
