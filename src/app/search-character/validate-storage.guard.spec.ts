import { TestBed } from '@angular/core/testing';

import { ValidateStorageGuard } from './validate-storage.guard';

describe('ValidateStorageGuard', () => {
  let guard: ValidateStorageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateStorageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
