import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IBreed } from '../interfaces/breed.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsServiceService {

  constructor(private readonly httpClient: HttpClient) { }

  getBreeds(): Observable<IBreed[]> {
    return this.httpClient.get<IBreed[]>('https://api.thecatapi.com/v1/breeds');
  }
}
