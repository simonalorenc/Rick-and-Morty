import { TestBed } from '@angular/core/testing';

import { SearchDataService } from './characters.service';

describe('SearchDataService', () => {
  let service: SearchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
