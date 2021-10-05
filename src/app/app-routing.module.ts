import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SaveStorageComponent } from './save-storage/save-storage.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { ValidateStorageGuard } from './search-character/validate-storage.guard';
import { ShowMoviesComponent } from './show-movies/show-movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'show-movies', component: ShowMoviesComponent },
  { path: 'search-character', component: SearchCharacterComponent, canActivate: [ValidateStorageGuard] },
  { path: 'save-storage', component: SaveStorageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
