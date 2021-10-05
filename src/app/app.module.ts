import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SaveStorageComponent } from './save-storage/save-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowMoviesComponent,
    SearchCharacterComponent,
    HeaderComponent,
    SaveStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
