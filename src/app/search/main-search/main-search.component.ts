import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {MusicItem} from '../../models/musicItem';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  selectedSearch: string;
  input: string;
  results: Array<any>;
  trueResults: Array<MusicItem>;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  search() {
    if (!this.input) {
      return;
    }
    if (this.selectedSearch === 'album') {
      this.searchService.getAlbum(this.input)
    } else if (this.selectedSearch === 'artist') {
      this.searchService.getArtist(this.input).subscribe(res => {
        console.log(res.results.artistmatches.artist);
        this.results = res.results.artistmatches.artist as Array<any>;
      });
    } else if (this.selectedSearch === 'song') {
      this.searchService.getSong(this.input);
    }
  }



}
