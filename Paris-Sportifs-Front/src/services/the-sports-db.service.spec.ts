import { TestBed } from '@angular/core/testing';

import { TheSportsDbService } from './the-sports-db.service';

describe('TheSportsDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheSportsDbService = TestBed.get(TheSportsDbService);
    expect(service).toBeTruthy();
  });
});
