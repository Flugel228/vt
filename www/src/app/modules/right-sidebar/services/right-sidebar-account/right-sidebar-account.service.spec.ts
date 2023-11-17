import { TestBed } from '@angular/core/testing';

import { RightSidebarAccountService } from './right-sidebar-account.service';
import {RightSidebarService} from "../right-sidebar/right-sidebar.service";

describe('RightSidebarAccountService', () => {
  let service: RightSidebarAccountService;
  let rightSidebarService: RightSidebarService;

  const fakeRightSidebarService = jasmine.createSpyObj("fakeRightSidebar",["close", "open"]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RightSidebarAccountService,
        {provide: RightSidebarService, useValue: fakeRightSidebarService}
      ]
    });
    service = TestBed.inject(RightSidebarAccountService);
    rightSidebarService = TestBed.inject(RightSidebarService);
    fakeRightSidebarService.close.calls.reset();
    fakeRightSidebarService.open.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open the account sidebar', function () {
    service.open();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeTrue();
    });
    expect(fakeRightSidebarService.close).toHaveBeenCalledTimes(1);

  });

  it('should close the account sidebar', function () {
    service.close();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeFalse();
    })
  });

  it('should revert to the standard right sidebar', function () {
    service.back();
    expect(fakeRightSidebarService.open).toHaveBeenCalledTimes(1);
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeFalse();
    });
  });
});
