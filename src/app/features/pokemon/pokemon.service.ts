import { Injectable, WritableSignal, signal } from '@angular/core';
import { BaseAPIStateService } from '../base-template';
import { Observable } from 'rxjs';
import { IGif } from '@giphy/js-types';

@Injectable({
  providedIn: 'root',
})
export class PokemonService implements BaseAPIStateService {
  loadMore(): void {
    throw new Error('Method not implemented.');
  }
  showList: WritableSignal<any[]> = signal([]);
  page: 'pokemon' = 'pokemon';
  list: WritableSignal<any[]> = signal([]);
  detail: WritableSignal<any> = signal(null);
  getData(type: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  searchData(query: string, type: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
