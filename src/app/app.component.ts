import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <span class="title">{{ title }}</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'Olympic Games - Tokyo 2020 - Results';
}
