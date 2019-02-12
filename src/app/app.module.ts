import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LogindialogComponent } from './components/logindialog/logindialog.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { PatientComponent } from './pages/patient/patient.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HipaadialogComponent } from './components/hipaadialog/hipaadialog.component';
import { ClinicComponent } from './pages/clinic/clinic.component';
import { AddUserDialogComponent } from './components/add-user-dialog/add-user-dialog.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ChatComponent } from './components/chat/chat.component';
import { CaretakerComponent } from './pages/caretaker/caretaker.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    TopbarComponent,
    LogindialogComponent,
    UserDashboardComponent,
    CardListComponent,
    PatientComponent,
    SignupComponent,
    HipaadialogComponent,
    ClinicComponent,
    AddUserDialogComponent,
    ScheduleComponent,
    ChatComponent,
    CaretakerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    TextFieldModule,
    HttpClientModule,
    FontAwesomeModule,
    RoundProgressModule,
    AgmCoreModule.forRoot(),
    StarRatingModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    LogindialogComponent,
    HipaadialogComponent,
    AddUserDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
