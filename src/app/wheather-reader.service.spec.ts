import { TestBed, inject } from '@angular/core/testing';

import { WheatherReaderService } from './wheather-reader.service';

describe('WheatherReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WheatherReaderService]
    });
  });

  it('should be created', inject([WheatherReaderService], (service: WheatherReaderService) => {
    expect(service).toBeTruthy();
  }));
});
