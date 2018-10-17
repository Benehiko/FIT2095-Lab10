import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListactorsComponent} from './listactors/listactors.component';
import {AddactorComponent} from './addactor/addactor.component';
import {UpdateactorComponent} from './updateactor/updateactor.component';
import {DeleteactorComponent} from './deleteactor/deleteactor.component';
import {DatabaseService} from './database.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AddmovieComponent} from './addmovie/addmovie.component';
import {DeletemovieComponent} from './deletemovie/deletemovie.component';
import {ListmoviesComponent} from './listmovies/listmovies.component';
import {AddmovieactorComponent} from './addmovieactor/addmovieactor.component';
import {NotfoundComponent} from './notfound/notfound.component';

const appRoutes: Routes = [
  {path: 'listactors', component: ListactorsComponent},
  {path: 'addactor', component: AddactorComponent},
  {path: 'updateactor', component: UpdateactorComponent},
  {path: 'deleteactor', component: DeleteactorComponent},
  {path: 'listmovies', component: ListmoviesComponent},
  {path: 'deletemovie', component: DeletemovieComponent},
  {path: 'addmovie', component: AddmovieComponent},
  {path: 'addmovieactor', component: AddmovieactorComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '', redirectTo: '/listactors', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListmoviesComponent,
    AddmovieactorComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
