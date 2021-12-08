import { TestBed } from '@angular/core/testing';

import { FeedlinkService } from './feedlink.service';

describe('FeedlinkService', () => {
  let service: FeedlinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedlinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
