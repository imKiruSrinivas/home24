import { Component, OnInit } from '@angular/core';
import { ArtistInfoService } from '../service/artist-info.service';
import { Artist } from './artist.model';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent implements OnInit {

  artistInfo: Artist;
  artistEvent: Event;

  constructor(private artistInfoService: ArtistInfoService) { }

  ngOnInit() {
    this.artistInfo = null;
    this.artistEvent = null;
    this.getArtistInfo('joan');
  }

  search(name) {
    if (name.value) {
      this.getArtistInfo(name.value);
    }
  }

  getArtistInfo(name) {
    this.artistInfoService.getArtistInfo(name)
      .subscribe((artists) => {
        console.log('Artist Info : ', artists);
        this.artistInfo = artists;
        this.getArtistEvent(name, 'all');
      });
  }

  private getArtistEvent(name, date) {
    this.artistInfoService.getArtistEvent(name, date)
      .subscribe((artistInfo) => {
        console.log(artistInfo);
        this.artistEvent = artistInfo["Data"];
      });
  }

}
