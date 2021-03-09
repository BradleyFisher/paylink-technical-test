import { TestBed } from '@angular/core/testing';

import { MagicGetSetService } from './magic-get-set.service';

describe('MagicGetSetService', () => {
  let service: MagicGetSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicGetSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
