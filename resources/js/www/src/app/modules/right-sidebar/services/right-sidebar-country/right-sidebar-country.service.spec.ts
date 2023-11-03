import { TestBed } from '@angular/core/testing';

import { RightSidebarCountryService } from './right-sidebar-country.service';

describe('RightSidebarCountryService', () => {
  let service: RightSidebarCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightSidebarCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
