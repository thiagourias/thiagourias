import { Component, OnInit, Input } from '@angular/core';

interface LinksItem {
  name: string;
  icon: string;
  action: () => void;
}

interface Links {
  text1: string;
  text2: string;
}

@Component({
  selector: 'app-fixit',
  templateUrl: './fixit.component.html',
  styleUrls: ['./fixit.component.css']
})
export class FixitComponent implements OnInit {
  showP1: boolean = false;
  showP2: boolean = false;
  showP3: boolean = false;
  showP4: boolean = false;
  @Input() text: string = '';
  displayedText: string = '';
  typingSpeed: number = 100;


  texts: Links = {
    text1: 'Turning  dreams  into  <code></code>',
    text2: 'UX/UI DESIGNER AND FRONTEND DEVELOPER.'
  };

  ngOnInit() {
    this.text = this.texts.text1;
    this.displayedText = '';
    this.startTyping();
    setTimeout(() => {
      this.showP1 = true;
    }, 3100);
    setTimeout(() => {
      this.showP2 = true;
    }, 3500);
    setTimeout(() => {
      this.showP3 = true;
    }, 3900);
    setTimeout(() => {
      this.showP4 = true;
    }, 4300);
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

  startTyping(): void {
    let index = 0;
    const interval = setInterval(() => {
      const char = this.text.charAt(index);
      this.displayedText += `<span class="char">${char}</span>`;
      index++;
      if (index === this.text.length) {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }
}
