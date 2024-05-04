import { InjectionToken, WritableSignal } from '@angular/core';
import { GifResult, GifsResult } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { Observable } from 'rxjs';
export type BaseAPIStateService = {
  page: 'giphy' | 'pokemon';
  list: WritableSignal<GifsResult | any[] | null>;
  showList: WritableSignal<IGif[] | any[]>;
  detail: WritableSignal<IGif | any | null>;
  getData(type: string): Observable<GifsResult | any>;
  getById(id: string): Observable<GifResult | any>;
  searchData(query: string, type: string): Observable<GifsResult | any>;
  loadMore(): void;
};
export const BASE_API_STATE_SERVICE_TOKEN =
  new InjectionToken<BaseAPIStateService>('base-api-service');
