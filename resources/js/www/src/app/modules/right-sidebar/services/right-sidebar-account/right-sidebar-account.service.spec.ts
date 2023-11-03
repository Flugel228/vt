import { TestBed } from '@angular/core/testing';

import { RightSidebarAccountService } from './right-sidebar-account.service';

describe('RightSidebarAccountService', () => {
  let service: RightSidebarAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightSidebarAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
