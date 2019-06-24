import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Artist } from '../artist-info/artist.model';

@Injectable({
  providedIn: 'root'
})

export class ArtistInfoService {

  artistInfoUrl = 'https://rest.bandsintown.com/artists';
  appID = 250;

  constructor(private http: HttpClient) { }

  getArtistInfo(name: string): Observable<Artist> {
    return this.http.get<Artist>(this.artistInfoUrl + '/' + name + '?app_id=' + this.appID).pipe(

      catchError(this.handleError)
    );
  }

  // date - "upcoming", "past", "all", or a date range e.g. "2015-05-05,2017-05-05"
  // If not specified, only upcoming shows are returned

  getArtistEvent(name: string, date: string): Observable<Event> {
    return this.http.get<Event>(this.artistInfoUrl + '/' + name + '?app_id=250&date=' + (date ? date : 'upcoming')).pipe(

      catchError(this.handleError)
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse.error.message);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }

}
