import { TestBed, inject } from '@angular/core/testing';

import { CommonMessageService } from './common-message.service';

describe('CommonMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonMessageService]
    });
  });

  it('should be created', inject([CommonMessageService], (service: CommonMessageService) => {
    expect(service).toBeTruthy();
  }));
});
