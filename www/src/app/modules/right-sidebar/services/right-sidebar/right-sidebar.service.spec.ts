import { TestBed } from '@angular/core/testing';

import { RightSidebarService } from './right-sidebar.service';

describe('RightSidebarService', () => {
  let service: RightSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightSidebarService]
    });
    service = TestBed.inject(RightSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should close sidebar', function () {
    service.close();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeFalse();
    })
  });

  it('should open sidebar', function () {
    service.open();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeTrue();
    })
  });

});
