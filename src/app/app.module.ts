import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanySelectedComponent } from './company-selected/company-selected.component';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule } from 'ngx-progressbar';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company/:id', component: CompanySelectedComponent },
  //{ path: '**', component: PageNotFoundComponent },
];





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanySelectedComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
