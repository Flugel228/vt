import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMetadataComponent } from './bottom-metadata.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('BottomMetadataComponent', () => {
  let component: BottomMetadataComponent;
  let fixture: ComponentFixture<BottomMetadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomMetadataComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(BottomMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isExpanded to false', () => {
    expect(component.isExpanded).toBe(false);
  });

  it('should toggle description', function () {
    component.toggleDescription();
    expect(component.isExpanded).toBeTrue();

    component.toggleDescription();
    expect(component.isExpanded).toBeFalse();
  });
});
