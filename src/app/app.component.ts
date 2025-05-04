import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { TablePrimeNgComponent } from './components/table/table.component';
import { PokeApiService } from './services/poke-api.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonComponent,
    SelectComponent,
    AsyncPipe,
    JsonPipe,
    TablePrimeNgComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private pokeApiService = inject(PokeApiService);
  protected pagination = signal({ limit: 10, offset: 0 });
  protected data$ = computed(() => {
    const { limit, offset } = this.pagination();
    return this.pokeApiService.getPokemons(limit, offset);
  });
}
