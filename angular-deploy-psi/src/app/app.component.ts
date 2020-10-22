import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-deploy-psi';

  movie_title;
  movie_description;
  movie_release_date;
  movie_link;
  constructor( public movieService: MovieService ){
    this.movie();
  }

  movie() {
    this.movieService.showMovie().subscribe(
      (res)=>{
        this.movie_title = res.title;
        this.movie_description = res.description;
        this.movie_release_date = res.release_date;
        this.movie_link = res.link;
        console.log(res);
        
      }, (error)=>{
        console.log(error);
      }
    )
  }
}
