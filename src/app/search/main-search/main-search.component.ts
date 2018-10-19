import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {MusicItem} from '../../models/musicItem';
import {UserService} from '../../authentication/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  selectedSearch: string;
  private searchType: string;
  input: string;
  results: Array<MusicItem>;
  anAlbum: MusicItem = {
    album: 'test2',
    artist: 'test',
    description: 'hi'
  };
  constructor(private searchService: SearchService, private userService: UserService) { }

  ngOnInit() {
  }
  search() {
    if (!this.input) {
      return;
    }
    if (this.selectedSearch === 'album') {
      this.searchType = 'album';
      console.log('searching for albums');
      this.searchService.getAlbum(this.input).subscribe(res => {
        this.results = [];
        console.log(res);
        res.results.albummatches.album.forEach(element => {
          const album: MusicItem = {
            artist: element.artist,
            album: element.name,
            description: element.url,
          };
          this.results.push(album);
        });
      });
    } else if (this.selectedSearch === 'artist') {
      this.searchType = 'artist';
      console.log('searching for artists');
      this.searchService.getArtist(this.input).subscribe(res => {
        this.results = [];
        res.results.artistmatches.artist.forEach(element => {
          const artist: MusicItem = {
            artist: element.name,
            description: element.url,
          };
          this.results.push(artist);
        });
        console.log(res.results.artistmatches.artist);
      });
    } else if (this.selectedSearch === 'song') {
      this.searchType = 'song';
      console.log('searching for songs');
      this.searchService.getSong(this.input).subscribe(res => {
        this.results = [];
        res.results.trackmatches.track.forEach(element => {
          const song: MusicItem = {
            track: element.name,
            artist: element.artist
          };
          this.results.push(song);
        });
      });
    }
  }
  addFavoriteAlbum(album: MusicItem) {
    this.userService.user.subscribe(res => {
     return this.userService.addFavoriteAlbums(album, res);
   });
    console.log(album);
  }
  addFavoriteArtist(artist: MusicItem) {
    this.userService.user.subscribe(res => {
      return this.userService.addFavoriteArtist(artist, res);
    });
  }
  addFavoriteSong(song: MusicItem) {
    this.userService.user.subscribe(res => {
      return this.userService.addFavoriteSong(song, res);
    });
  }
  add(item) {
    if (this.searchType === 'album') {
      this.addFavoriteAlbum(item);
    } else if (this.searchType === 'artist') {
      this.addFavoriteArtist(item);
    } else if (this.searchType === 'song') {
      this.addFavoriteSong(item);
    }
  }



}
