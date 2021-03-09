import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FibonacciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
