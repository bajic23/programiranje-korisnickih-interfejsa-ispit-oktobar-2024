import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  constructor(private route:ActivatedRoute,private router: Router){
    route.params.subscribe(params=>console.log(params['id']))
  }
  public details1() {
    if (this.router.url != "/movie") {
      this.router.navigate(["/movie"], { relativeTo: this.route })
    }
  }
}
