/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistInfoService } from './artist-info.service';

describe('Service: ArtistInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistInfoService]
    });
  });

  it('should ...', inject([ArtistInfoService], (service: ArtistInfoService) => {
    expect(service).toBeTruthy();
  }));
});
