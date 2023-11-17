import { TestBed } from '@angular/core/testing';

import { SidebarService } from './sidebar.service';

describe('SidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarService]
    });
    service = TestBed.inject(SidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open sidebar', function () {
    service.open();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeTrue();
    });
  });

  it('should close sidebar', function () {
    service.close();
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBeFalse();
    });
  });

  it('should toggle a section', function () {
    const section = "exampleSection";
    service.toggleSection(section);
    expect(service.openSectionsIncludes(section)).toBeTrue();

    service.toggleSection(section);
    expect(service.openSectionsIncludes(section)).toBeFalse();
  });

  it('should have a default visibility of false', () => {
    service.isVisible.subscribe((isVisible) => {
      expect(isVisible).toBe(false);
    });
  });
});
