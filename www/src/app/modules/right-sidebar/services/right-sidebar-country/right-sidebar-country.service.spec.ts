import { TestBed } from '@angular/core/testing';

import { RightSidebarCountryService } from './right-sidebar-country.service';
import {RightSidebarService} from "../right-sidebar/right-sidebar.service";

describe('RightSidebarCountryService', () => {
  let service: RightSidebarCountryService;
  let rightSidebarService: RightSidebarService

  const fakeRightSidebarService = jasmine.createSpyObj("fakeRightSidebar", ["close", "open"]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RightSidebarCountryService,
        {provide: RightSidebarService, useValue: fakeRightSidebarService}
      ]
    });
    service = TestBed.inject(RightSidebarCountryService);
    rightSidebarService = TestBed.inject(RightSidebarService);
    fakeRightSidebarService.close.calls.reset();
    fakeRightSidebarService.open.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open country sidebar', function () {
    service.open();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeTrue();
    });
    expect(fakeRightSidebarService.close).toHaveBeenCalledTimes(1);
  });

  it('should close country sidebar', function () {
    service.close();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeFalse();
    });
  });

  it('should revert to the standard right sidebar', function () {
    service.back();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeFalse();
    });
  });
});
