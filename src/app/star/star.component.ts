import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.css',
})
export class StarComponent {
  @Input() rating!: number;
  starWidth!: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.rating = 0;
    this.starWidth = (this.rating * 86) / 5;
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.starWidth = (this.rating * 86) / 5;
  }

  onClick() {
    this.ratingClicked.emit(`Đánh giá của sản phẩm là ${this.rating} sao!`);
  }
}
