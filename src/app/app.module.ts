import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { DashViewComponent } from './views/dash-view/dash-view.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorsViewComponent } from './views/errors-view/errors-view.component';
import { DatepickerRangePopupComponent } from './components/datepicker-range-popup/datepicker-range-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { GraphiqueComponent } from './components/graphique/graphique.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { NewCustomersComponent } from './charts/new-customers/new-customers.component';
import { CartsComponent } from './charts/carts/carts.component';
import { VisitsComponent } from './charts/visits/visits.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorsFormComponent,
    AuthViewComponent,
    DashViewComponent,
    ErrorsViewComponent,
    DatepickerRangePopupComponent,
    GraphiqueComponent,
    LineChartComponent,
    NewCustomersComponent,
    CartsComponent,
    VisitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgChartsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
