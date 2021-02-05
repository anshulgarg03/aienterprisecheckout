import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbService } from './breadcrumb.service';
@NgModule({
  declarations: [
    AppComponent,
    CheckoutpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
