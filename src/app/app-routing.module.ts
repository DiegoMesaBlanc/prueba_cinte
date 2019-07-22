import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { RegistryComponent } from './components/registry/registry.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistryComponent },
  { path: 'items', component: ViewListComponent, canActivate: [AuthGuard] },
  { path: 'crear-item', component: CreateItemComponent, canActivate: [AuthGuard] },
  { path: 'editar-item', component: EditItemComponent, canActivate: [AuthGuard] },
  { path: 'eliminar-item', component: DeleteItemComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
