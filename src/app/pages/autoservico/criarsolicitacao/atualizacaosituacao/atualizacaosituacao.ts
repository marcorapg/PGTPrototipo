import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-atualizacaosituacao',
  imports: [],
  templateUrl: './atualizacaosituacao.html',
  styleUrl: './atualizacaosituacao.css'
})
export class Atualizacaosituacao {
  @Input() exibirEdicao: boolean = true;
}
