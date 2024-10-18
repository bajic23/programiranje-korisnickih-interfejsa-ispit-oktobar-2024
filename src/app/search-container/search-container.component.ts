import { Component, Input, NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
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
  selector: 'app-search-container',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    NgFor,
    NgIf,
    RouterModule,
  ],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css'
})
export class SearchContainerComponent {
  public sMovie: string | null = null
  public sActor: string | null = null
  public sDirector: string | null = null
  public sDate: string | null = null



    private dataService: DataService
    
    constructor(private router: Router,
      private activeRoute:ActivatedRoute
    ){
      this.dataService = new DataService()
    }
    
      ngOnInit(): void {
        this.movies = this.dataService.getMovies()
        this.directors = this.dataService.getDirectors()
        this.actors=this.dataService.getActors()
        this.dates=this.dataService.getDates()
      }
      public movies: string[]=[]
      public directors: string[]=[]
      public actors: string[]=[]
      public dates:string[]=[]

      public doSearch(){
        if(this.router.url != "/search"){
          this.router.navigate(["/search"],{relativeTo: this.activeRoute})
        }
        console.log(this.sMovie,this.sActor,this.sDirector,this.sDate)
      }

    }
