import { InjectionToken, Signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
export type BaseAPI = {
  error: string;
  data: any;
  status: string;
};
export type BaseAPIStateService = {
  output1: WritableSignal<string | null>;
  output2: WritableSignal<string | null>;
  computed: Signal<string>;
  getDataSignal: WritableSignal<BaseAPI>;
  createDataSignal: WritableSignal<BaseAPI>;
  updateDataSignal: WritableSignal<BaseAPI>;
  deleteDataSignal: WritableSignal<BaseAPI>;
  typeDialog: WritableSignal<'get' | 'create' | 'update' | 'delete'>;
  loadingState(): Observable<boolean>;
  get(): Observable<BaseAPI>;
  create(): Observable<BaseAPI>;
  update(): Observable<BaseAPI>;
  delete(): Observable<BaseAPI>;
};
export const BASE_API_STATE_SERVICE_TOKEN =
  new InjectionToken<BaseAPIStateService>('base-api-service');
