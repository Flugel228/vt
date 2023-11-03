import { TestBed } from '@angular/core/testing';

import { RightSidebarLanguageService } from './right-sidebar-language.service';

describe('RightSidebarLanguageService', () => {
  let service: RightSidebarLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightSidebarLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
