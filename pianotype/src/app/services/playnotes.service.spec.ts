import { TestBed, inject } from '@angular/core/testing';

import { PlayNotesService } from './playnotes.service';

describe('PlaynotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayNotesService]
    });
  });

  it('should be created', inject([PlayNotesService], (service: PlayNotesService) => {
    expect(service).toBeTruthy();
  }));
});
