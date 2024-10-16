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
    RouterModule],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css'
})
export class SearchContainerComponent {
  @Input() movies: string[] | undefined
  @Input() actors: string[] | undefined
  @Input() directors: string[] | undefined
  @Input() dates: string[] | undefined

}
