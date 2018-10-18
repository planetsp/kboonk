import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FavoritesService } from '../../favorites.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get(
    //   'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=79e11c48618b3efe5764269d595f5baf&format=json'
    // ).subscribe(res => {
    //   console.log(res);
    // });

  }

}
