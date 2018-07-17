import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import {RouterModule, Routes} from '@angular/router';
import { ItemPageComponent } from './item-page/item-page.component';

const appRouters: Routes = [
  {path:'', component:MainPageComponent},
  {path:'list',component:ListPageComponent},
  {path:'list/:id/:title',component:ItemPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListPageComponent,
    ItemPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
