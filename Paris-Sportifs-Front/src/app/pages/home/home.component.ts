import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { TheSportsDbService } from 'src/services/the-sports-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  isValid:boolean;
  hideLogin:boolean=false;
  @Output() searchLeague = new EventEmitter<string>();
  user=sessionStorage.getItem('Login');
  constructor(public translate: TranslateService,  private theSportsDbService: TheSportsDbService
    ){
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
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

  showItem(checkLogged:boolean){
    this.isValid=checkLogged;
    if(this.isValid){
     this.hideLogin=true;
    }
    console.log("resultat",this.isValid);
  }

}