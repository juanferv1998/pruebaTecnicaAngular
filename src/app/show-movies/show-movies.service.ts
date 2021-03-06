import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowMoviesService {

  urlApi: string = 'https://swapi.dev/api/films';

  constructor( private http: HttpClient) { }

  getMovies(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

}
