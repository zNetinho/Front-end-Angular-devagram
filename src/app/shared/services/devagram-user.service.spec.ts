import { TestBed } from '@angular/core/testing';

import { DevagramUserService } from './devagram-user.service';

describe('DevagramUserService', () => {
  let service: DevagramUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevagramUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
