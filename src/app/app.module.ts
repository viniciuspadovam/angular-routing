import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { IndexModule } from './pages/index/index.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { UrlParamExModule } from './pages/url-param-ex/url-param-ex.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    PortfolioModule,
    UrlParamExModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
