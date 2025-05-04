import { JsonPipe } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PokemonListResponse } from '../../Interfaces/poke.interface';

@Component({
  selector: 'app-table-prime-ng',
  imports: [TableModule, JsonPipe],
  templateUrl: './table-prime-ng.component.html',
  styleUrl: './table-prime-ng.component.scss',
})
export class TablePrimeNgComponent {
  data = input.required<PokemonListResponse>();
  paginationModel = model.required<{ limit: number; offset: number }>();
  loading = false;

  pageChange(event: { first: number; rows: number }) {
    this.paginationModel.set({
      limit: event.rows,
      offset: event.first,
    });
  }
}
