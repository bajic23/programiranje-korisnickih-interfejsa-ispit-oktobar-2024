//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    NgFor,
    RouterModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private dataService: DataService
  public sMovie: string | null = null
  public sActor: string | null = null
  public sDirector: string | null = null
  public sDate: string | null = null

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) {
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
  public doSearch() {
    if (this.router.url != "/search") {
      this.router.navigate(["/search"], { relativeTo: this.activeRoute })
    }
    console.log(this.sMovie,this.sActor,this.sDirector,this.sDate)
  }
}
