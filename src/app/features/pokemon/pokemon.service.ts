import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { BaseAPI, BaseAPIStateService } from '../base-template';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService implements BaseAPIStateService {
  output1: WritableSignal<string | null> = signal(null);
  output2: WritableSignal<string | null> = signal(null);
  computed: Signal<string> = computed(
    () => 'Pokemon ' + this.output1() + ' ' + this.output2()
  );
  constructor() {}
  typeDialog = signal<'get' | 'create' | 'update' | 'delete'>('create');
  getDataSignal = signal({
    data: '',
    error: '',
    status: '',
  });
  createDataSignal = signal({
    data: '',
    error: '',
    status: '',
  });
  updateDataSignal = signal({
    data: '',
    error: '',
    status: '',
  });
  deleteDataSignal = signal({
    data: '',
    error: '',
    status: '',
  });
  loadingState(): Observable<boolean> {
    return of(false);
  }
  get(): Observable<BaseAPI> {
    return of({ data: 'Get Pokemon data', error: '', status: 'success' }).pipe(
      tap((res) => this.getDataSignal.set(res))
    );
  }
  create(): Observable<BaseAPI> {
    return of({
      data: 'Create Pokemon data',
      error: '',
      status: 'success',
    }).pipe(tap((res) => this.createDataSignal.set(res)));
  }
  update(): Observable<BaseAPI> {
    return of({
      data: 'Update Pokemon data',
      error: '',
      status: 'success',
    }).pipe(tap((res) => this.updateDataSignal.set(res)));
  }
  delete(): Observable<BaseAPI> {
    return of({
      data: 'Delete Pokemon data',
      error: '',
      status: 'success',
    }).pipe(tap((res) => this.deleteDataSignal.set(res)));
  }
}
