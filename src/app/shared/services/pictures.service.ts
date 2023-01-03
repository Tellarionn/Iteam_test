import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, Observable } from 'rxjs';
import { setLoaded } from 'src/app/store/actions/load.action';
import { IAppState } from 'src/app/store/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<IAppState>
  ) { }

  getCatsPictures(limit: number, page: number, breed?: string): Observable<HttpResponse<Object>> {
    let params = new HttpParams()
      .set('limit', limit)
      .set('page', page)
      .set('order', 'asc');
    if (breed) {
      params = params.set('breed_ids', breed)
    }
    return this.httpClient.get<HttpResponse<Object>>(`https://api.thecatapi.com/v1/images/search`, { params, observe: 'response' })
    .pipe(finalize(() => this.store.dispatch(setLoaded({ loaded: true }))));
  }
}
