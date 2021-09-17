import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { DashViewComponent } from './views/dash-view/dash-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorsFormComponent,
    AuthViewComponent,
    DashViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
