import { Component, OnInit } from '@angular/core';
import {UserService} from '../../authentication/user.service';
import {MusicItem} from '../../models/musicItem';

@Component({
  selector: 'app-favorite-songs',
  templateUrl: './favorite-songs.component.html',
  styleUrls: ['./favorite-songs.component.css']
})
export class FavoriteSongsComponent implements OnInit {
  favoriteSongs: Array<MusicItem>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(res => {
      this.userService.getFavoriteSongs(res).subscribe(rez => {
        this.favoriteSongs = rez;
      });
    });
  }

}
