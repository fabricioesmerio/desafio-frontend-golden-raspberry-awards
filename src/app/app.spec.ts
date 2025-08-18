import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Header } from './core/header/header';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterTestingModule } from '@angular/router/testing';

describe(App.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterLink, RouterModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, Header, RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
