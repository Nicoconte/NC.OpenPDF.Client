import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDefaultSectionComponent } from './components/dashboard-default-section/dashboard-default-section.component';
import { MyFilesSectionComponent } from './components/my-files-section/my-files-section.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "dashboard", component: DashboardComponent, children: [
    {path: "", component: DashboardDefaultSectionComponent },
    {path: "my-files", component: MyFilesSectionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
