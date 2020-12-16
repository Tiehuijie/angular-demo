import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import {HeroParentComponent} from './components/component-interaction/hero-parent.component';
import {HeroChildComponent} from './components/component-interaction/hero-child.component';
import {NameParentComponent} from './components/component-interaction/name-parent.component';
import {NameChildComponent} from './components/component-interaction/name-child.component';
import {VersionParentComponent} from './components/component-interaction/version-parent.component';
import {VersionChildComponent} from './components/component-interaction/version-child.component';
import {CountdownTimerComponent} from './components/component-interaction/countdown-timer.component';
import {CountdownParentComponent} from './components/component-interaction/countdown-parent.component';
import {MissioncontrolComponent} from './components/component-interaction/missioncontrol.component';
import {AstronautComponent} from './components/component-interaction/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    MissioncontrolComponent,
    AstronautComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
