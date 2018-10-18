import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomepageComponent} from './main/homepage/homepage.component';
import {MainSearchComponent} from './search/main-search/main-search.component';
import {FavoriteAlbumsComponent} from './main/favorite-albums/favorite-albums.component';
import {FavoriteSongsComponent} from './main/favorite-songs/favorite-songs.component';
import {FavoriteArtistsComponent} from './main/favorite-artists/favorite-artists.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomepageComponent },
  { path: 'search', component: MainSearchComponent },
  { path: 'favorite/albums', component: FavoriteAlbumsComponent },
  { path: 'favorite/songs', component: FavoriteSongsComponent },
  { path: 'favorite/artists', component: FavoriteArtistsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
