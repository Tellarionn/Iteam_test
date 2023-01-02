import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBreed } from '../shared/interfaces/breed.interface';
import { IPicture } from '../shared/interfaces/picture.interface';
import { getBreeds } from '../store/actions/breeds.action';
import { getPictures } from '../store/actions/pictures.action';
import { selectBreeds } from '../store/selectors/breeds.selectors';
import { selectLoaded } from '../store/selectors/load.selectors';
import { selectPictures } from '../store/selectors/pictures.selector';
import { selectTotalCount } from '../store/selectors/total.count.selectors';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public readonly noneValue: string = 'None';
  public readonly title: string = 'Cats';

  public limit: number = 10;
  public page: number = 0;
  public breakPoint: number = 5;

  public breedControl = new FormControl(this.noneValue);

  public totalCounter!: Observable<number>;
  public breeds!: Observable<IBreed[]>;
  public pictures!: Observable<IPicture[]>;
  public loaded!: Observable<boolean>;

  private breedId: string = '';

  constructor(
    private readonly store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getBreeds());
    this.store.dispatch(getPictures({ limit: this.limit, page: this.page }));
    this.loaded = this.store.pipe(select(selectLoaded));
    this.breeds = this.store.pipe(select(selectBreeds));
    this.pictures = this.store.pipe(select(selectPictures));
    this.totalCounter = this.store.pipe(select(selectTotalCount));
  }

  public selectBreed(breed?: IBreed): void {
    this.page = 0;
    if (breed) {
      this.breedControl.setValue(breed.name);
      this.breedId = breed.id;
    } else {
      this.breedControl.setValue(this.noneValue);
      this.breedId = '';
    }
    this.store.dispatch(getPictures({ limit: this.limit, page: this.page, breed: this.breedId }));
  }

  public handlePageEvent(event: PageEvent) {
    this.page = event.pageIndex;
    this.limit = event.pageSize;
    this.store.dispatch(getPictures({ limit: this.limit, page: this.page, breed: this.breedId }));
  }

  public onResize(event: UIEvent) {
    const target = event.target as Window;
    this.breakPoint = (target.innerWidth <= 850) ? 2 : (target.innerWidth <= 1300) ? 3 : 5;
  }
}
