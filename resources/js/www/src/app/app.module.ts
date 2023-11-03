import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { RightSidebarComponent } from './modules/right-sidebar/components/right-sidebar/right-sidebar.component';
import {RightSidebarModule} from "./modules/right-sidebar/right-sidebar.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RightSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
