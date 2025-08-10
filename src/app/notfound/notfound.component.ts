import { Component } from '@angular/core';

interface CardsMenuItem {
  title: string;
  text: string;
  route: string;
  routeIcon: string;
  routeText: string;
  img: string;

}
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  cardsMenu: CardsMenuItem[] = [
    {
      title: 'About',
      text: 'Discover a glimpse of my story and professional journey.',
      route: '/about',
      routeIcon: 'fa-solid fa-address-card',
      routeText: 'About Me',
      img: 'assets/images/notFoundImages/professional.jpg',
    },
    {
      title: 'This Site',
      text: 'A simple explanation about how I made this site.',
      route: '/thissite',
      routeIcon: 'fa-solid fa-code',
      routeText: 'Know more',
      img: 'assets/images/notFoundImages/coding.jpg',
    },
    {
      title: 'Source Code',
      text: ' Here you can get the source Code from this Site.',
      route: 'https://github.com/thiagourias/thiagourias',
      routeIcon: 'fa-brands fa-github',
      routeText: 'Source Code',
      img: 'assets/images/notFoundImages/github.png',
    },
  ];

  activeCardIndex: number | null = null;

  setActiveCard(index: number): void {
    this.activeCardIndex = index;
  }

  clearActiveCard(): void {
    this.activeCardIndex = null;
  }
}
