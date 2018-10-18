import { Component, OnInit } from '@angular/core';
import {MusicItem} from '../../models/musicItem';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Array<MusicItem>;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  showResults() {
  }

}
