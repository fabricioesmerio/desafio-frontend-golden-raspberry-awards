import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStudiosWithWinners } from './top-studios-with-winners';

describe('TopStudiosWithWinners', () => {
  let component: TopStudiosWithWinners;
  let fixture: ComponentFixture<TopStudiosWithWinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopStudiosWithWinners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStudiosWithWinners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
