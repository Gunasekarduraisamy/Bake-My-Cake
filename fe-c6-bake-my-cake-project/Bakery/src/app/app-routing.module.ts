import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BakeCartComponent } from './bake-cart/bake-cart.component';
import { BakeRequestsComponent } from './bake-requests/bake-requests.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "bake-card/:id", component:BakeCartComponent, canDeactivate: [CanDeactivateGuard] },
  { path: "bake-requests", component: BakeRequestsComponent, canActivate: [AuthGuard] },
  {path:"Bake",component:BakeCartComponent},
  { path: "**", component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
