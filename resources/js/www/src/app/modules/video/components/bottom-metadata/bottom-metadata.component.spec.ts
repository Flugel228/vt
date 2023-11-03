import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMetadataComponent } from './bottom-metadata.component';

describe('BottomMetadataComponent', () => {
  let component: BottomMetadataComponent;
  let fixture: ComponentFixture<BottomMetadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomMetadataComponent]
    });
    fixture = TestBed.createComponent(BottomMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
