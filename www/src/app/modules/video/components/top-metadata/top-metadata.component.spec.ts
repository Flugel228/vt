import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMetadataComponent } from './top-metadata.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('TopMetadataComponent', () => {
  let component: TopMetadataComponent;
  let fixture: ComponentFixture<TopMetadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMetadataComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(TopMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
