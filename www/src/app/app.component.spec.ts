import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Component} from "@angular/core";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      AppComponent,
      NavbarComponentStub,
      SidebarComponentStub,
      RightSidebarComponentStub
    ],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

@Component({
  selector: "app-navbar",
  template: ''
})
class NavbarComponentStub {}

@Component({
  selector: "app-sidebar",
  template: ''
})
class SidebarComponentStub {}

@Component({
  selector: "app-right-sidebar",
  template: ''
})
class RightSidebarComponentStub {}
