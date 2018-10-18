import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SearchModule} from '../search/search.module';
import {SharedModule} from '../shared/shared.module';
import { FavoriteAlbumsComponent } from './favorite-albums/favorite-albums.component';
import { FavoriteSongsComponent } from './favorite-songs/favorite-songs.component';
import { FavoriteArtistsComponent } from './favorite-artists/favorite-artists.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    SearchModule,
    RouterModule
  ],
  exports: [
    MainNavComponent,
    FavoriteAlbumsComponent
  ],

  declarations: [HomepageComponent, MainNavComponent, DashboardComponent, FavoriteAlbumsComponent, FavoriteSongsComponent, FavoriteArtistsComponent]
})
export class MainModule { }
