import { TestBed, inject } from '@angular/core/testing';

import { PlayListsService } from './play-lists.service';

describe('PlayListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayListsService]
    });
  });

  it('should be created', inject([PlayListsService], (service: PlayListsService) => {
    expect(service).toBeTruthy();
  }));
});
