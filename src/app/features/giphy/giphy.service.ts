import { Injectable, WritableSignal, signal } from '@angular/core';
import { BaseAPIStateService } from '../base-template';
import { Observable, from, tap } from 'rxjs';
import { GifResult, GifsResult, GiphyFetch } from '@giphy/js-fetch-api';
import { environment } from '@environments/environment';
import { IGif } from '@giphy/js-types';

@Injectable({
  providedIn: 'root',
})
export class GiphyService implements BaseAPIStateService {
  page: 'giphy' = 'giphy';
  limit = 20;
  giphyFetch = new GiphyFetch(environment.giphy_key);
  list: WritableSignal<GifsResult | null> = signal(null);
  showList: WritableSignal<IGif[]> = signal([]);
  detail: WritableSignal<GifResult | null> = signal(null);
  getData(): Observable<GifsResult> {
    return from(this.giphyFetch.trending({ limit: this.limit })).pipe(
      tap((result) => {
        this.list.set(result);
        this.showList.set(result.data);
      })
    );
  }
  loadMore(): void {
    this.giphyFetch
      .trending({
        offset: (this.list()?.pagination?.offset || 0) + this.limit,
        limit: this.limit,
      })
      .then((result) => {
        this.list.set(result);
        this.showList.set([...this.showList(), ...result.data]);
      });
  }
  getById(id: string): Observable<GifResult> {
    return from(this.giphyFetch.gif(id)).pipe(
      tap((result) => this.detail.set(result))
    );
  }
  searchData(query: string, type?: string): Observable<GifsResult> {
    if (type === 'animate') return this.animateGifs(query);
    return from(this.giphyFetch.search(query, { limit: this.limit })).pipe(
      tap((result) => {
        this.list.set(result);
        this.showList.set(result.data);
      })
    );
  }
  animateGifs(query: string): Observable<GifsResult> {
    return from(this.giphyFetch.animate(query, { limit: this.limit })).pipe(
      tap((result) => {
        this.list.set(result);
        this.showList.set(result.data);
      })
    );
  }
}
