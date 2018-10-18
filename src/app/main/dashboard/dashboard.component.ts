import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FavoritesService } from '../../favorites.service';
import {Favorite} from '../../models/favorite';
import {Router} from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  favorites: Array<Favorite>;
  ngOnInit() {
    this.favorite.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }
  search(){
    this.router.navigateByUrl('/search');
  }
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private favorite: FavoritesService) {}
}
