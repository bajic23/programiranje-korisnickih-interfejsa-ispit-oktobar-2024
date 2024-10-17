import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MovieModel } from '../../models/movie.models';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-search-container',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    NgFor,
    RouterLink,
    NgIf,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css'
})
export class SearchContainerComponent implements OnInit {
  private dataService: DataService

  constructor() {
    this.dataService = new DataService()
  }

  ngOnInit(): void {
    this.movies = this.dataService.getMovies()
    this.directors = this.dataService.getDirectors()
    this.actors = this.dataService.getActors()
    this.dates = this.dataService.getDates()
  }
  public movies: string[] = []
  public directors: string[] = []
  public actors: string[] = []
  public dates: string[] = []
}


