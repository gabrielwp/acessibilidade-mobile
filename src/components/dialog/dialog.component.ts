import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() titulo: string;
  @Input() mensagem: string;
  @Input() tituloBotao: string;
  @Output() clickBotaoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickBotao() {
    this.clickBotaoEvent.emit();
  }
}
