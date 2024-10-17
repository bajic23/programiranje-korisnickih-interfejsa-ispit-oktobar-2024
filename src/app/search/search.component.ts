import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchContainerComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

   public directors: string[] = []
   public movies: string[] = []
   public actors: string[] = []
   public dates: string[] = []
   

  constructor( private route: ActivatedRoute,
     private dataService: DataService
  ){

  }

  ngOnInit(): void {
     this.route.queryParams.subscribe(params=>{
      this.movies = params['movies']
      this.directors = params['directors']
      this.actors = params['actors']
      this.dates = params['dates']
     })
  }

}
