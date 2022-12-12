import { TestBed } from '@angular/core/testing';

import { AntheUiService } from './anthe-ui.service';

describe('AntheUiService', () => {
  let service: AntheUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntheUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
