import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RightSidebarComponent} from "./components/right-sidebar/right-sidebar.component";
import {RightSidebarService} from "./services/right-sidebar/right-sidebar.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { AccountsComponent } from './components/accounts/accounts.component';
import { IndexComponent } from './components/index/index.component';
import { ThemeComponent } from './components/theme/theme.component';
import { LanguageComponent } from './components/language/language.component';
import { CountryComponent } from './components/country/country.component';



@NgModule({
  declarations: [
    RightSidebarComponent,
    AccountsComponent,
    IndexComponent,
    ThemeComponent,
    LanguageComponent,
    CountryComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [
    RightSidebarService
  ],
  exports: [
    RightSidebarComponent
  ]
})
export class RightSidebarModule { }
