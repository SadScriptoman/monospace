import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PromoComponent } from './promo/promo.component';
import { FileComponent } from './file/file.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TranslationService } from './translation.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PromoComponent,
    FileComponent,
    FormComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
