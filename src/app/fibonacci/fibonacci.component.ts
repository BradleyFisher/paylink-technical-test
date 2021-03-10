import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FibonacciService } from './services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FibonacciComponent implements OnInit {
  readonly stream = this.service.stream;

  public numberToCalculate = 5;

  constructor(private service: FibonacciService) {}

  ngOnInit(): void {}

  public reCalculate(): void {
    this.service.recalculateFibonacci(this.numberToCalculate);
  }
}
