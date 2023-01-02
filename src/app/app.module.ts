import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './shared/modules/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appReducer } from './store/reducers/app.reducer';
import { BreedsEffects } from './store/effects/breeds.effects';
import { PictureEffects } from './store/effects/pictures.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainInterceptor } from './shared/interceptors/main-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({}),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([BreedsEffects, PictureEffects])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MainInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
