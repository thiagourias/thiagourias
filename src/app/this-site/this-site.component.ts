import { Component } from '@angular/core';

interface ThisSiteCards {
  title: string;
  description: string;
  icon: string;
}

interface ThisSiteLogos {
  titleLogos: string;
  image: string;
}

@Component({
  selector: 'app-this-site',
  templateUrl: './this-site.component.html',
  styleUrls: ['./this-site.component.css']
})
export class ThisSiteComponent {
  thisSiteCards: ThisSiteCards[] = [
    {
      title: 'STEP 1.',
      icon: 'fa-solid fa-code',
      description: 'I started with a simple HTML and CSS website, just to have an idea of how I wanted it to look like.',
    },
    {
      title: 'STEP 2.',
      icon: 'fa-brands fa-github',
      description: 'After that, I created a GitHub repository and uploaded my files there.',
    },
    {
      title: 'STEP 3.',
      icon: 'fa-brands fa-angular',
      description: 'Then, I created a new Angular project using Angular CLI.',
    },
    {
      title: 'STEP 4.',
      icon: 'fa-solid fa-code',
      description: 'I created the components that I needed for my website (header, footer, about me, contact, this site).',
    },
    {
      title: 'STEP 5.',
      icon: 'fa-solid fa-code',
      description: 'I added the routing to my application, so I could navigate between the different components.',
    },
    {
      title: 'STEP 6.',
      icon: 'fa-solid fa-code',
      description: 'After that, I started to add the content to my components, using the HTML and CSS that I had created before as a reference.',
    },
    {
      title: 'STEP 7.',
      icon: 'fa-solid fa-code',
      description: 'Then, I added some functionality to my contact form using Angular\'s forms module and Netlify\'s form handling service.',
    },
    {
      title: 'STEP 8.',
      icon: 'fa-solid fa-code-pull-request',
      description: 'I deployed my website to Netlify using the GitHub integration.',
    },
    {
      title: 'STEP 9.',
      icon: 'fa-solid fa-globe',
      description: 'Then, I bought a domain name at Godaddy and configured it to point to my Netlify site.',
    },
  ];

  thisSiteLogos: ThisSiteLogos[] = [
    {
      titleLogos: 'Angular',
      image: 'assets/images/logos/angular_logo.png',
    },
    {
      titleLogos: 'Bootstrap',
      image: 'assets/images/logos/bootstrap_logo.png',
    },
    {
      titleLogos: 'FontAwesome',
      image: 'assets/images/logos/font_awesome_logo.svg',
    },
    {
      titleLogos: 'Github',
      image: 'assets/images/logos/github_logo.webp',
    },
    {
      titleLogos: 'GoDaddy',
      image: 'assets/images/logos/godaddy_logo.png',
    },
    {
      titleLogos: 'Google Fonts',
      image: 'assets/images/logos/google_fonts_logo.png',
    },
    {
      titleLogos: 'Netlify',
      image: 'assets/images/logos/netlify_logo.svg',
    },
    {
      titleLogos: 'VS Code',
      image: 'assets/images/logos/vscode_logo.png',
    }
  ];
}
