import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-addactor',
  templateUrl: './addactor.component.html',
  styleUrls: ['./addactor.component.css']
})
export class AddactorComponent implements OnInit {

  fullName = '';
  bYear = 0;
  actorId = '';

  constructor(private dbService: DatabaseService, private router: Router) {
  }

  onSaveActor() {
    const obj = {name: this.fullName, bYear: this.bYear};
    this.dbService.createActor(obj).subscribe(result => {
      this.router.navigate(['/listactors']);
    });
  }

  ngOnInit(): void {
  }

}
