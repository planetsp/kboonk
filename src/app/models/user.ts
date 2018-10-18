import {MusicItem} from './musicItem';

export interface User {
  uid: string;
  email: string;
  favoriteAlbums?: Array<MusicItem>;
  favoriteSongs?: Array<MusicItem>;
  favoriteArtists?: Array<MusicItem>;

}
