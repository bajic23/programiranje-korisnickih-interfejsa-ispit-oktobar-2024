import { Component, OnInit } from '@angular/core';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { Input, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MovieModel } from '../../models/movie.models';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchContainerComponent,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    NgFor,
    NgIf,
    RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  public sMovie: string | null = null
  public sActor: string | null = null
  public sDirector: string | null = null
  public sDate: string | null = null
  dataService: any;
   

  constructor( private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    this.movies = this.dataService.getMovies()
    this.directors = this.dataService.getDirectors()
    this.actors=this.dataService.getActors()
    this.dates=this.dataService.getDates()
  }
  public directors: string[] = []
  public movies: string[] = []
  public actors: string[] = []
  public dates: string[] = []

  public doSearch(){
    if(this.router.url != "/search"){
      this.router.navigate(["/search"],{relativeTo: this.route})
    }
    console.log(this.sMovie,this.sActor,this.sDirector,this.sDate)
  }


}
