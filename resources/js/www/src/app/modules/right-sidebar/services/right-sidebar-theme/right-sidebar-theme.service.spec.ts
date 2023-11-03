import { TestBed } from '@angular/core/testing';

import { RightSidebarThemeService } from './right-sidebar-theme.service';

describe('RightSidebarThemeService', () => {
  let service: RightSidebarThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightSidebarThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
