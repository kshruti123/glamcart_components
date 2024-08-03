import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { VidComponentComponent } from './vid-component/vid-component.component';
import { TrendingComponentComponent } from './trending-component/trending-component.component';
import { NewArivalComponentComponent } from './new-arival-component/new-arival-component.component';
import { FlashSaleComponentComponent } from './flash-sale-component/flash-sale-component.component';
import { Vid2ComponentComponent } from './vid2-component/vid2-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    VidComponentComponent,
    TrendingComponentComponent,
    NewArivalComponentComponent,
    FlashSaleComponentComponent,
    Vid2ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
