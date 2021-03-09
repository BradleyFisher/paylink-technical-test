import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FizzbuzzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
