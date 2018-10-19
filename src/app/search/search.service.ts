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
    return this.http.get(this.configURl + 'artist.search&artist=' + artistName + '&api_key=' +
      this.apikey + '&format=json');
  }
  public getSong(songName: string): Observable<any> {
   return this.http.get(this.configURl + 'track.search&track=' + songName + '&api_key=' +
     this.apikey + '&format=json');
  }
  public getAlbum(albumName: string): Observable<any> {
    return this.http.get(this.configURl + 'album.search&album=' + albumName + '&api_key=' +
      this.apikey + '&format=json');
  }
}
