import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TheSportsDbService {

  constructor(private http: HttpClient) { }

/**
 * get all teams
 * @param idLeague 
 * @returns 
 */
  getAllTeams(idLeague: any): Observable<any> {
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}`);
  }

/**
 * get details team
 * @param idTeam
 * @returns 
 */
  getDetailTeam(idTeam: any): Observable<any> {
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`);
  }

  /**
   * get all leagues
   * @param term 
   * @param formatter 
   * @returns 
   */
  getAllLeagues(term: string, formatter: any): any {
    if (term === '') {
      return of([]);
    }
    return this.http.get<any>(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
      .pipe(
        map((response) => {
          formatter = (x: { strLeague: string }) => x.strLeague;
          return response.leagues.filter(data => data.strSport.toLocaleLowerCase().includes("soccer") && data.strLeague.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
        })

      );
  }
}


