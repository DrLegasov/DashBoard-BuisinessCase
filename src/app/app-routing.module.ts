import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { DashViewComponent } from './views/dash-view/dash-view.component';
import { ErrorsViewComponent } from './views/errors-view/errors-view.component';

const routes: Routes = [

{ path: '', canActivate:[AuthGuard], component : DashViewComponent},
{ path: 'home', canActivate:[AuthGuard], component : DashViewComponent},
{ path: 'auth', component : AuthViewComponent},
{ path: 'not-found', component : ErrorsViewComponent},
{ path: '**', redirectTo : 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
