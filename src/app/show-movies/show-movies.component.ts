import { Component, OnInit } from '@angular/core';
import { ShowMoviesService } from './show-movies.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.scss']
})
export class ShowMoviesComponent implements OnInit {

  dataMovies: any;

  constructor( private service: ShowMoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.service.getMovies().subscribe(movies => {
      this.dataMovies = movies.results;
    })
  }

}
