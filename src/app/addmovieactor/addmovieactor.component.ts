import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addmovieactor',
  templateUrl: './addmovieactor.component.html',
  styleUrls: ['./addmovieactor.component.css']
})
export class AddmovieactorComponent implements OnInit {

  actorsDB: any[] = [];
  movieDB: any[] = [];
  fullName = '';
  movieTitle = '';

  constructor(private dbService: DatabaseService, private router: Router) {
  }

  ngOnInit() {
    this.onGetActors();
    this.onGetMovies();
  }

  onAddActor() {
    const obj = {movieTitle: this.movieTitle, actorName: this.fullName};
    this.dbService.addActor(obj).subscribe(result => {
      this.router.navigate(['/listmovies']);
    });
  }

  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.movieDB = data;
    });
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

}
