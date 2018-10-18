import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSearchComponent } from './main-search/main-search.component';
import { ResultsComponent } from './results/results.component';
import { ResultItemComponent } from './result-item/result-item.component';
import { AddFavoriteComponent } from './results/add-favorite/add-favorite.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    MainSearchComponent,
    ResultsComponent
  ],
  declarations: [MainSearchComponent, ResultsComponent, ResultItemComponent, AddFavoriteComponent]
})
export class SearchModule { }
