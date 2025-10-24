import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transferenciaassentamento',
  imports: [],
  templateUrl: './transferenciaassentamento.html',
  styleUrl: './transferenciaassentamento.css'
})
export class Transferenciaassentamento {
  @Input() exibirEdicao: boolean = true;
}
