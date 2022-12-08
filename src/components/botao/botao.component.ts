import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() titulo: string;
  @Input() acessibilidade: string;
  @Output() clickBotaoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickBotao() {
    this.clickBotaoEvent.emit();
  }

}
