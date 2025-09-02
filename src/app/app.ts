import { Component, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Menu } from "./layout/menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('PrototipoPGT');
  ngAfterViewInit() {
    const core = (window as any).core;
    document.querySelectorAll('.br-wizard').forEach((el: Element, index: number) => {
      // Give each wizard a unique name, e.g. wizard-0, wizard-1
      new core.BRWizard(`wizard-${index}`, el);
      console.log(`wizard-${index}`);
    });
    // // Initialize all GovBR Inputs
    // document.querySelectorAll('.br-input').forEach((el: Element) => {
    //   new core.BRInput(el);
    // });

    // // Initialize all GovBR Buttons
    // document.querySelectorAll('.br-button').forEach((el: Element) => {
    //   new core.BRButton(el);
    // });

    // Do the same for other components you use: Menu, Breadcrumb, etc.
    
    // const wizardList = []
    // for (const brWizard of window.document.querySelectorAll('.br-wizard')) {
    //   wizardList.push(new core.BRWizard('br-wizard', brWizard))
    // }
  }
}
