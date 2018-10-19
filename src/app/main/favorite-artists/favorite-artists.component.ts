import { Component, OnInit } from '@angular/core';
import {MusicItem} from '../../models/musicItem';
import {UserService} from '../../authentication/user.service';

@Component({
  selector: 'app-favorite-artists',
  templateUrl: './favorite-artists.component.html',
  styleUrls: ['./favorite-artists.component.css']
})
export class FavoriteArtistsComponent implements OnInit {
  favoriteArtists: Array<MusicItem> = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(res => {
      this.userService.getFavoriteArtists(res).subscribe(rez => {
        this.favoriteArtists = rez;
      });
    });
  }

}
