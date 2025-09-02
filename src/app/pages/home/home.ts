import { Component } from '@angular/core';
import { Breadcrumb } from '../../layout/breadcrumb/breadcrumb';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Breadcrumb, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  pageBreadcrumbs = [
    { text: 'Home', address: '/' }
  ];
}
