import { AngularWebStorageModule } from 'angular-web-storage';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RestockComponent } from './restock/restock.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    WithdrawComponent,
    IntroductionComponent,
    RestockComponent,
    OverviewComponent
  ],
  imports: [
    AngularWebStorageModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
