import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { BasvurularComponent } from './basvurular/basvurular.component';
import { ɵAngularFireSchedulers} from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    BasvurularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
