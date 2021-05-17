import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {Route, RouterModule} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import {MatCardModule} from '@angular/material/card';
import { MapComponent } from './views/map/map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PlaneTileComponent } from './components/plane-tile/plane-tile.component';
import {NgProgressModule} from 'ngx-progressbar';
import { ProgressComponent } from './components/progress/progress.component';

const routes: Route[] = [
  { path: 'home', component: DashboardComponent },
  { path: 'map', component: MapComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardCardComponent,
    MapComponent,
    NotificationsComponent,
    PlaneTileComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgProgressModule,
    LeafletModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
