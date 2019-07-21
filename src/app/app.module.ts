import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DeleteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
