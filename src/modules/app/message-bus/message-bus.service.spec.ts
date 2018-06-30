import { TestBed, inject } from '@angular/core/testing';

import { MessageBusService } from './message-bus.service';

describe('MessageBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageBusService]
    });
  });

  it('should be created', inject([MessageBusService], (service: MessageBusService) => {
    expect(service).toBeTruthy();
  }));
});
