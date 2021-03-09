import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicGetSetComponent } from './magic-get-set.component';

describe('MagicGetSetComponent', () => {
  let component: MagicGetSetComponent;
  let fixture: ComponentFixture<MagicGetSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicGetSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicGetSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
