import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MagicGetSetService } from './services/magic-get-set.service';

@Component({
  selector: 'app-magic-get-set',
  templateUrl: './magic-get-set.component.html',
  styleUrls: ['./magic-get-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagicGetSetComponent implements OnInit, OnDestroy {
  readonly stream = this.service.stream;

  private subscriptions: Subscription = new Subscription();

  public setCareerValue = '';
  constructor(private service: MagicGetSetService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.service.state.magicClass.subscribe((value) => {
        this.setCareerValue = value.personCareer;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setCareer(): void {
    this.service.setCareer(this.setCareerValue);
  }
}
