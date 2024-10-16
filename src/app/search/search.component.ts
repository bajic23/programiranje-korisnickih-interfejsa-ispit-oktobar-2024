import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

   public directors: string[] = []
   public movies: string[] = []
   

  constructor( private route: ActivatedRoute){

  }

  ngOnInit(): void {
     this.route.queryParams.subscribe(params=>{
      this.movies = params['movies']
      this.directors = params['directors']
     })
  }

}
