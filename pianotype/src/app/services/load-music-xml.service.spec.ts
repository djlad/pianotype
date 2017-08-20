import { TestBed, inject } from '@angular/core/testing';

import { LoadMusicXmlService } from './load-music-xml.service';

describe('LoadMusicXmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadMusicXmlService]
    });
  });

  it('should be created', inject([LoadMusicXmlService], (service: LoadMusicXmlService) => {
    expect(service).toBeTruthy();
  }));
});
