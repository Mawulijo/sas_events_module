import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CustomMaterialModules } from './ngmat.module';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { EventsService } from './services/events.service';
import { SubstationConfComponent } from './substation-conf/substation-conf.component';
import { RelaysComponent } from './relays/relays.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { BayDetailsComponent } from './bay-details/bay-details.component';



export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home',      component: HomeComponent },
  { path: 'events',      component: EventsComponent },
  { path: 'configure', component: ConfigurationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    EventsComponent,
    ConfigurationComponent,
    SubstationConfComponent,
    RelaysComponent,
    EventDetailComponent,
    BayDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CustomMaterialModules,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ EventsService ],
  entryComponents: [SubstationConfComponent, RelaysComponent, EventDetailComponent, BayDetailsComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
