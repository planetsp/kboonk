import { Component, OnInit } from '@angular/core';
import {UserService} from '../../authentication/user.service';
import {MusicItem} from '../../models/musicItem';

@Component({
  selector: 'app-favorite-albums',
  templateUrl: './favorite-albums.component.html',
  styleUrls: ['./favorite-albums.component.css']
})
export class FavoriteAlbumsComponent implements OnInit {
  favoriteAlbums: Array<MusicItem>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(res => {
       this.userService.getFavoriteAlbums(res).subscribe(rez => {
         this.favoriteAlbums = rez;
      });
    });
  }

}
