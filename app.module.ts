import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { UpdateIPOComponent } from './update-ipo/update-ipo.component';
import { RouterModule,Routes } from '@angular/router';
import { IpoComponent } from './ipo/ipo.component';


const routes:Routes=[
  {path:'' , redirectTo:'admin', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'manageCompany' , component:ManageCompanyComponent},
  {path:'manageExchange' , component:ManageExchangeComponent},
  {path:'updateIPO' , component:UpdateIPOComponent},
  {path:'importData' , component:ImportDataComponent},
  {path:'admin' , component:AdminComponent},
  {path:'ipo' , component:IpoComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIPOComponent,
    IpoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
