import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desbloqueio',
  imports: [],
  templateUrl: './desbloqueio.html',
  styleUrl: './desbloqueio.css'
})
export class Desbloqueio {
  @Input() exibirEdicao: boolean = true;
}
