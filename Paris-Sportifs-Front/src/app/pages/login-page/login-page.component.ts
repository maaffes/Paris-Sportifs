import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Output() isValidLogin = new EventEmitter<Boolean>();


  constructor(public translate: TranslateService,private route: ActivatedRoute,
    private router: Router ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }


  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.isValidLogin.emit(f.valid);
    if(f.valid)  {
      sessionStorage.setItem('Login', f.value.login);
      sessionStorage.setItem('password', f.value.password);
      this.router.navigate(['/Home', { id: 'heroId' }]);
    }
  }

}
