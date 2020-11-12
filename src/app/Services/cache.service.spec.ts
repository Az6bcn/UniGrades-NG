/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { CacheService } from './cache.service';

describe('Service: Cache', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheService]
    });
  });

  it('should ...', inject([CacheService], (service: CacheService) => {
    expect(service).toBeTruthy();
  }));
});
