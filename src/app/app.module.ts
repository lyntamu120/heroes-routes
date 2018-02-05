import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisModule } from './crisis-center/crisis.module';
import { AdminModule } from './admin/admin.module';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';


import { ComposeMessageComponent } from './compose-message/compose-message.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [ AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
