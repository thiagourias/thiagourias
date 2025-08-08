import { Component, OnInit } from '@angular/core';

interface LinksItem {
  name: string;
  icon: string;
  action: () => void;
}

@Component({
  selector: 'app-fixit',
  templateUrl: './fixit.component.html',
  styleUrls: ['./fixit.component.css']
})
export class FixitComponent implements OnInit {
  showH1: boolean = false;
  showP1: boolean = false;
  showH3: boolean = false;
  showH4: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.showH1 = true;
    }, 700);
    setTimeout(() => {
      this.showP1 = true;
    }, 1400);
    setTimeout(() => {
      this.showH3 = true;
    }, 2100);
    setTimeout(() => {
      this.showH4 = true;
    }, 2800);
  }

  links: LinksItem[] = [
    {
      name: 'Linkedin',
      icon: 'fa-brands fa-linkedin',
      action: () => this.openLinkedin()
    },
    {
      name: 'Mail Me',
      icon: 'fa-solid fa-envelope',
      action: () => this.mailTo()
    },
    {
      name: 'Resume',
      icon: 'fa-solid fa-file-arrow-down',
      action: () => this.downloadResume()
    },
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      action: () => this.openGithub()
    },
  ];

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/resume/RESUME_THIAGO_URIAS.pdf';
    link.download = 'RESUME_THIAGO_URIAS.pdf';
    link.target = '_blank';
    link.click();
  }
  openLinkedin(): void {
    window.open('https://www.linkedin.com/in/thiagourias/', '_blank');
  }

  mailTo(): void {
    window.open('mailto:thiagourias_@hotmail.com', '_blank');
  }

  openGithub(): void {
    window.open('https://github.com/thiagourias/thiagourias', '_blank');
  }

}
