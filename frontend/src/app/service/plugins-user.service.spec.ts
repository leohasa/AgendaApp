import { TestBed } from '@angular/core/testing';

import { PluginsUserService } from './plugins-user.service';

describe('PluginsUserService', () => {
  let service: PluginsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluginsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
