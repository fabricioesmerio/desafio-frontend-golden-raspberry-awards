import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersWithLongestShortestInterval } from './producers-with-longest-shortest-interval';

describe('ProducersWithLongestShortestInterval', () => {
  let component: ProducersWithLongestShortestInterval;
  let fixture: ComponentFixture<ProducersWithLongestShortestInterval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducersWithLongestShortestInterval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducersWithLongestShortestInterval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
