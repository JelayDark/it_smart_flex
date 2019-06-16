import { TestBed } from '@angular/core/testing';

import { TimerWebWorkerService } from './timer-web-worker.service';

describe('TimerWebWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimerWebWorkerService = TestBed.get(TimerWebWorkerService);
    expect(service).toBeTruthy();
  });
});
