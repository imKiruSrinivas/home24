import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArtistInfoService {

  artistInfoUrl = 'https://rest.bandsintown.com/artists';
  appID = 250;

  constructor(private http: HttpClient) { }

  getArtistInfo(name: string) {
    return this.http.get(this.artistInfoUrl + '/' + name + '?app_id=' + this.appID);
  }

  // date - "upcoming", "past", "all", or a date range e.g. "2015-05-05,2017-05-05"
  // If not specified, only upcoming shows are returned

  getArtistEvent(name: string, date: string) {
    return this.http.get(this.artistInfoUrl + '/' + name + '?app_id=250&date=' + date ? date : 'upcoming');
  }

}
