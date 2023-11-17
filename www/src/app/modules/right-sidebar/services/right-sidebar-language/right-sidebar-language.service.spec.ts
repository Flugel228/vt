import { TestBed } from '@angular/core/testing';

import { RightSidebarLanguageService } from './right-sidebar-language.service';
import {RightSidebarService} from "../right-sidebar/right-sidebar.service";

describe('RightSidebarLanguageService', () => {
  let service: RightSidebarLanguageService;
  let rightSidebarService: RightSidebarService;

  const fakeRightSidebarService = jasmine.createSpyObj("fakeRightSidebar",["close", "open"]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RightSidebarLanguageService,
        {provide: RightSidebarService, useValue: fakeRightSidebarService}
      ]
    });
    service = TestBed.inject(RightSidebarLanguageService);
    rightSidebarService = TestBed.inject(RightSidebarService);
    fakeRightSidebarService.close.calls.reset();
    fakeRightSidebarService.open.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open language sidebar', function () {
    service.open();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeTrue()
    })
    expect(fakeRightSidebarService.close).toHaveBeenCalledTimes(1);
  });

  it('should close the language sidebar', function () {
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
