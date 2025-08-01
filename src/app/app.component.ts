import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thiagourias';
  isLoading = true;
  isHome = false;

    constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.urlAfterRedirects === '/' || event.url === '/';
      }
    });
  }

onActivate(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}