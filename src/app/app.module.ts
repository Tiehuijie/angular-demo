import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import {HeroParentComponent} from './components/component-interaction/hero-parent.component';
import {HeroChildComponent} from './components/component-interaction/hero-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionComponent,
    HeroParentComponent,
    HeroChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
