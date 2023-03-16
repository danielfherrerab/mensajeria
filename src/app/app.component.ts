import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Orders', url: 'home', icon: 'bookmarks' },
    { title: 'include order', url: 'add-order', icon: 'person' },
    { title: 'location', url: 'location', icon: 'navigate-circle' },
  ];

  public appLogout = [
    { title: 'Log out', url: 'login', icon: 'log-out' },
  ];
  
  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  );

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}
