import { TestBed } from '@angular/core/testing';

import { TimerLocalStorageService } from './timer-local-storage.service';

describe('TimerLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimerLocalStorageService = TestBed.get(TimerLocalStorageService);
    expect(service).toBeTruthy();
  });
});
