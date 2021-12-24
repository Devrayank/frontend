import { TestBed } from '@angular/core/testing';

import { WelldataService } from './welldata.service';

describe('WelldataService', () => {
  let service: WelldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
