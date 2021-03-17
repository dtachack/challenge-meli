import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-product',
  templateUrl: './result-product.component.html',
  styleUrls: ['./result-product.component.sass']
})
export class ResultProductComponent {

  @Input() price: number | undefined;
  @Input() title: string | undefined;
  @Input() currencyCode: string | undefined;
  @Input() location: string | undefined;
  @Input() image: string | undefined | null;

  @Output() click: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }
}
