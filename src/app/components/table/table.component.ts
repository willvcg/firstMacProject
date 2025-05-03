import { JsonPipe } from '@angular/common';
import { Component, effect, input, output, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PokemonListResponse } from '../../Interfaces/poke.interface';

@Component({
  selector: 'app-table-prime-ng',
  imports: [TableModule, Button, JsonPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TablePrimeNgComponent {
  data = input.required<PokemonListResponse>();
  pagination = input.required<{ limit: number; offset: number }>();
  paginationChange = output<{ first: number; rows: number }>();
  limit = signal(10);
  first = signal(0);
  rows = signal(10);
  loading = false;

  constructor() {
    effect(() => {
      const { limit, offset } = this.pagination();
      if (!limit && !offset) {
        return;
      }
      this.limit.set(limit);
      this.first.set(offset);
      this.rows.set(limit);
    });
  }

  pageChange(event: { first: number; rows: number }) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    this.paginationChange.emit({ first: this.first(), rows: this.rows() });
  }
}
