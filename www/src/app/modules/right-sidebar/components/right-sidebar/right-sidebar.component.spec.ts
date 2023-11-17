import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RightSidebarComponent} from './right-sidebar.component';
import {Component} from "@angular/core";

describe('RightSidebarComponent', () => {
  let component: RightSidebarComponent;
  let fixture: ComponentFixture<RightSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RightSidebarComponent,
        IndexComponentStub,
        AccountsComponentStub,
        ThemeComponentStub,
        LanguageComponentStub,
        CountryComponentStub
      ]
    });
    fixture = TestBed.createComponent(RightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'right-sidebar-index',
  template: ''
})
class IndexComponentStub {}

@Component({
  selector: 'right-sidebar-accounts',
  template: ''
})
class AccountsComponentStub {}

@Component({
  selector: 'right-sidebar-theme',
  template: ''
})
class ThemeComponentStub {}

@Component({
  selector: 'right-sidebar-language',
  template: ''
})
class LanguageComponentStub {}

@Component({
  selector: 'right-sidebar-country',
  template: ''
})
class CountryComponentStub {}
