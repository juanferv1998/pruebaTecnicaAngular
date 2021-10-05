import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { character } from './character.models';

@Injectable({
  providedIn: 'root'
})
export class SearchCharacterService {

  urlApi: string = 'https://swapi.dev/api/people/';

  constructor( private http: HttpClient) { }

  getCharacter(id: number): Observable<character>{
    return this.http.get<character>(this.urlApi + id);
  }

}
