import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  queried: string;
  configURl = 'http://ws.audioscrobbler.com/2.0/?method=';
  apikey = '79e11c48618b3efe5764269d595f5baf';
  constructor(private http: HttpClient) { }
  public getArtist(artistName: string): Observable<any> {
    //let relevantArtists: Array<string> = [];
    return this.http.get(this.configURl + 'artist.search&artist=' + artistName + '&api_key=' +
      this.apikey + '&format=json');
    // this.queried = artistName;
    // relevantArtists.push(artistName);
    // return relevantArtists;
  }
  public getSong(songName: string) {
    let relevantSongs: Array<string> = [];
   return this.http.get(this.configURl + 'artist.search&artist=' + songName + '&api_key=' +
     this.apikey + '&format=json').subscribe(res => {
     //console.log(res.results);

   });
    this.queried = songName;
    relevantSongs.push(songName);
    return relevantSongs;
  }
  public getAlbum(albumName: string) {
    let relevantAlbums: Array<string> = [];
    return this.http.get(this.configURl + 'artist.search&artist=' + albumName + '&api_key=' +
      this.apikey + '&format=json').subscribe(res => {
          console.log(res);
    });
    relevantAlbums.push(albumName);
    return relevantAlbums;
  }
}
