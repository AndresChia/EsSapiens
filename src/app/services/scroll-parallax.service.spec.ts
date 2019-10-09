import { TestBed } from '@angular/core/testing';

import { ScrollParallaxService } from './scroll-parallax.service';

describe('ScrollParallaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollParallaxService = TestBed.get(ScrollParallaxService);
    expect(service).toBeTruthy();
  });
});
