import { TestBed } from '@angular/core/testing';

import { UsercreationserviceService } from './usercreationservice.service';

describe('UsercreationserviceService', () => {
  let service: UsercreationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercreationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
