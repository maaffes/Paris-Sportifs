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
  constructor(
    private route: ActivatedRoute,
    private theSportsDbService: TheSportsDbService
  ) { }

  ngOnInit() {
    const idTeam = this.route.snapshot.queryParams.idTeam;
    this.theSportsDbService.getDetailTeam(idTeam).subscribe(
      (data) => {
        this.team = data.teams[0];
      }
    )
  }
}
