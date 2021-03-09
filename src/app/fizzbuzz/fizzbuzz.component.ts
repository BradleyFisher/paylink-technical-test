import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FizzbuzzService } from './services/fizzbuzz.service';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FizzbuzzComponent implements OnInit {
  readonly stream = this.service.stream;
  constructor(private service: FizzbuzzService) {}

  ngOnInit(): void {}

  public runFizzbuzz(): void {
    this.service.fizzBuzzCalculation();
  }
}
