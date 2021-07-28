import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule}  from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatMenuModule} from '@angular/material/menu';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/';
import { MatCardModule } from '@angular/material';
import { MyProfileComponent } from './components/views/my-profile/my-profile.component';
import { ProfileComponent } from './components/views/my-profile/profile/profile.component';
import { PontualityComponent } from './components/views/my-profile/pontuality/pontuality.component';
import { DailyComponent } from './components/views/my-profile/daily/daily.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LastRegisterComponent } from './components/last-register/last-register.component';
import { JourneyComponent } from './components/journey/journey.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClosingMirrorComponent } from './components/closing-mirror/closing-mirror.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MyProfileComponent,
    ProfileComponent,
    PontualityComponent,
    DailyComponent,
    LastRegisterComponent,
    JourneyComponent,
    ClosingMirrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
