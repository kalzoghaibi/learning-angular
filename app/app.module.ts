import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { MembersComponent } from './members/members.component';
import { ProductModule } from './products/product.module';
import { CertificateModule } from './certificates/certificate.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'members', component: MembersComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    CertificateModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    MembersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
