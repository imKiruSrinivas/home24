import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { ArtistInfoComponent } from './artist-info/artist-info.component';
import { ArtistInfoService } from './service/artist-info.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
   declarations: [
      AppComponent,
      ArtistInfoComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutes,
      MatCardModule, MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,  
      HttpClientModule
   ],
   providers: [ArtistInfoService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
