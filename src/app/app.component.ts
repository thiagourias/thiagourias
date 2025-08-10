import { Component } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Event as RouterEvent
} from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thiagourias';
  isLoading = false;
  isHome = false;

  private routeLoadDelays: { [key: string]: number } = {
    '/fixit': 1200,
    '/about': 200,
    '/home': 200,
    '/notfound': 200,
    '/contact': 200,
    '/thissite': 200,
    '/success': 200,
    '/teste': 200,
    '/': 200,
  };

  private currentUrl: string = '/';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        this.currentUrl = event.url;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isHome = event instanceof NavigationEnd &&
          (event.urlAfterRedirects === '/' || event.url === '/');

        this.viewportScroller.scrollToPosition([0, 0]);

        const delay = this.getDelayForRoute(this.currentUrl);

        setTimeout(() => {
          this.isLoading = false;
        }, delay);
      }
    });
  }

  private getDelayForRoute(url: string): number {
    const cleanUrl = url.split('?')[0].split('#')[0];
    return this.routeLoadDelays[cleanUrl] ?? 1000;
  }
}
