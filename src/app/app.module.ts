import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxFileDragDropModule } from 'ngx-file-drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilesFormComponent } from './components/files-form/files-form.component';
import { FilesTableComponent } from './components/files-table/files-table.component';
import { MyFilesSectionComponent } from './components/my-files-section/my-files-section.component';
import { DownloadBtnComponent } from './components/download-btn/download-btn.component';
import { DeleteFileBtnComponent } from './components/delete-file-btn/delete-file-btn.component';
import { DiskSpaceBarComponent } from './components/disk-space-bar/disk-space-bar.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { DashboardDefaultSectionComponent } from './components/dashboard-default-section/dashboard-default-section.component';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { PdfFilesSectionComponent } from './components/pdf-files-section/pdf-files-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    FilesFormComponent,
    FilesTableComponent,
    MyFilesSectionComponent,
    DownloadBtnComponent,
    DeleteFileBtnComponent,
    DiskSpaceBarComponent,
    SpinnerLoaderComponent,
    DashboardDefaultSectionComponent,
    ActionCardComponent,
    PdfFilesSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxFileDragDropModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      timeOut: 1400
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
