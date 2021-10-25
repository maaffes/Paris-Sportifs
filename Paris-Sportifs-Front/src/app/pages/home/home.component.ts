import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { TheSportsDbService } from 'src/services/the-sports-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  @Output() searchLeague = new EventEmitter<string>();

  constructor(
    private theSportsDbService: TheSportsDbService
  ) {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.theSportsDbService.getAllLeagues(term, this.formatter)
      )
    )

  formatter = (x: { strLeague: string }
  ) => x.strLeague;



}