import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMetadataComponent } from './top-metadata.component';

describe('TopMetadataComponent', () => {
  let component: TopMetadataComponent;
  let fixture: ComponentFixture<TopMetadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMetadataComponent]
    });
    fixture = TestBed.createComponent(TopMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
