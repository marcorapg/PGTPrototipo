import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atualizacaounidadefamiliar',
  imports: [],
  templateUrl: './atualizacaounidadefamiliar.html',
  styleUrl: './atualizacaounidadefamiliar.css'
})
export class Atualizacaounidadefamiliar {
  @Input() exibirEdicao: boolean = true;
}
