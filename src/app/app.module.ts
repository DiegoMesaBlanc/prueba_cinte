import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';

import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { RegistryComponent } from './components/registry/registry.component';

// import { ApiInterceptor } from './common/interceptor/httpinterceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ViewListComponent,
    CreateItemComponent,
    EditItemComponent,
    NotFoundPageComponent,
    DeleteItemComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
