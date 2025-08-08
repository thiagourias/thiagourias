import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { FixitComponent } from './fixit/fixit.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { ContactComponent } from './contact/contact.component';
import { ThisSiteComponent } from './this-site/this-site.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    AboutComponent,
    FixitComponent,
    SuccessComponent,
    ContactComponent,
    ThisSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
