import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../Interfaces/poke.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private http = inject(HttpClient);
  private url = signal('https://pokeapi.co/api/v2/pokemon');

  getPokemons(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(
      `${this.url()}?limit=${limit}&offset=${offset}`,
    );
  }
}
