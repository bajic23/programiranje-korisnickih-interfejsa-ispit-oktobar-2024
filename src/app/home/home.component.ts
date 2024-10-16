//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgFor } from '@angular/common';
import { DataService } from '../services/data.service';
import { RouterModule } from '@angular/router';

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

constructor(){
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
}
