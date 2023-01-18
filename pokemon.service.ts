import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public rootURL = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';

  constructor(private http: HttpClient) { }

  public getPokemons(){
    return this.http.get(this.rootURL);
  }

}
