import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheSportsDbService } from 'src/services/the-sports-db.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  team: any;
  nameTeam: string;
  constructor(
    private route: ActivatedRoute,
    private theSportsDbService: TheSportsDbService
  ) { }

  ngOnInit() {
    const idTeam = this.route.snapshot.queryParams.idTeam;
    this.nameTeam = this.route.snapshot.queryParams.name;
    debugger
    this.theSportsDbService.getDetailTeam(idTeam).subscribe(
      (data) => {
        this.team = data.equipment[0];
      }
    )
  }
}
