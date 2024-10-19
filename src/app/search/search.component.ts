import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MovieModel } from '../../models/movie.models';




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
    RouterModule, MatPaginatorModule, MatTableModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, AfterViewInit {
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
      this.router.navigate(["/search"], { relativeTo: this.route })
      this.dataSource.paginator = this.paginator;
    }
    console.log(this.sMovie, this.sActor, this.sDirector, this.sDate)
  }

  public sMovie: string | null = null
  public sActor: string | null = null
  public sDirector: string | null = null
  public sDate: string | null = null
  dataService: any;


  constructor(private route: ActivatedRoute, private router: Router) {
    this.dataService = new DataService()
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
  }
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Svemu dođe kraj', name: 'Jelena Đokić, Živko Anočić', weight: "Rajko Grlić", symbol: '25.10.2024 19:30' },
  { position: 'Čudovište', name: 'Ando Sakura, Eita Nagayama', weight: "Hirokazu Koreeda", symbol: '26.10.2024 18:30' },
  { position: 'Male šape na velikom putovanju', name: '/', weight: "Kevin Donovan", symbol: '27.10.2024 16:00' },
  { position: 'Leteći brod', name: 'Ekaterina Ageva,Anton Biryuko', weight: "Ilya Uchitel", symbol: '27.10.2024 20:00' },
  { position: 'My Hero Academia: Ti si sledeći', name: 'Yôsuke Kuroda', weight: "Tensai Okamura", symbol: '28.10.2024 21:00' },
  { position: 'Terrifier 3', name: 'Jason Patric, Daniel Roebuck', weight: "Damien Leone", symbol: '29.10.2024 22:00' },
  { position: 'Klinci kaubojci', name: '/', weight: "Juan Jesús García Galocha", symbol: '29.10.2024 16:00' },
  { position: 'Megdan: između vode i vatre', name: 'Viktor Savić, Petar Božović', weight: "Todor Chapkanov", symbol: '30.10.2024 19:30' },
  { position: 'Neukrotivi robot', name: '/', weight: "Chris Sanders", symbol: '1.11.2024 18:30' },
  { position: 'DŽoker: ludilo u dvoje', name: 'Joaquin Phoenix, Lady Gaga', weight: "Tod Filips", symbol: '1.11.2024 21:00' }
];


