import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { FormsModule } from '@angular/forms';
import { ColorChangerChildComponent } from './color-changer-child/color-changer-child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowSimulatorDirective } from './rainbow-simulator.directive';
import { RainbowTextComponent } from './rainbow-text/rainbow-text.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    CarteVisiteComponent,
    ColorChangerChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    MiniWordComponent,
    RainbowSimulatorDirective,
    RainbowTextComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
