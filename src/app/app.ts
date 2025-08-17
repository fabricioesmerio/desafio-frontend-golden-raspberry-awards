import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Header } from './core/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isCollapsed = false;
}
