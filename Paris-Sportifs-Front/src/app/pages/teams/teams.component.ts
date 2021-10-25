import { Component, Input, OnInit } from '@angular/core';
import { TheSportsDbService } from 'src/services/the-sports-db.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  listOfteams=[];
  errorTeams:boolean=true;
  @Input() set league(data) {
    if(data && data.idLeague ){
      this.theSportsDbService.getAllTeams(data.idLeague).subscribe(
        data=>{
          if(data.teams){
          this.listOfteams=data.teams;
          this.errorTeams=true;
        } else {
          this.errorTeams=false;
        }
      });
    }
    
};
  constructor(private theSportsDbService:TheSportsDbService) { 
  }

  ngOnInit() {
  }

}
