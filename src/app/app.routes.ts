import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: 'movie', component: MovieComponent },
    { path: 'signup', component: SignupComponent },
    {path: 'login', component:LoginComponent},
    { path: '**', redirectTo: '' }
];
