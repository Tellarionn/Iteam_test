import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private readonly httpClient: HttpClient) { }

  getCatsPictures(limit: number, page: number, breed?: string): Observable<HttpResponse<Object>> {
    let params = new HttpParams()
      .set('limit', limit)
      .set('page', page)
      .set('order', 'asc');
    if (breed) {
      params = params.set('breed_ids', breed)
    }
    return this.httpClient.get<HttpResponse<Object>>(`https://api.thecatapi.com/v1/images/search`, { params, observe: 'response' });
  }
}
