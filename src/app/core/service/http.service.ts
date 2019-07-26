import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  heroesUrl = 'xxxxxxxx';

  HomePageData() {
    return this.http.get('assets/json/home-page.json').pipe(
      retry(3), // retry a failed request up to 3 times
      // catchError(this.handleError) // then handle the error
    );
  }

  /** POST: add a new hero to the database */
  addHero(hero): Observable<any> {
    return this.http.post<any>(this.heroesUrl, hero);

  }
}
