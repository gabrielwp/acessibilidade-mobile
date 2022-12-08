import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-expansivel',
  templateUrl: './expansivel.component.html',
  styleUrls: ['./expansivel.component.scss'],
})
export class ExpansivelComponent implements OnInit {
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  @Input() headerExpansivelTemplateRef!: TemplateRef<any>;
  @Input() public titulo: string;
  @Input() public id: string;
  @Input() public expandido: boolean = false;
  @Output() onClickEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private element: ElementRef, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  public controleExpandirRecolher(): void {
    this.expandido = !this.expandido;
    this.onClickEvent.emit(this.expandido);
  }

  public getConteudoHeight() {
    const conteudo: HTMLElement =
      this.element.nativeElement.querySelector('.wrap__content');

    return `${conteudo.offsetHeight}px`;
  }
}
