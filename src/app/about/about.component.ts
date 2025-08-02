import { Component } from '@angular/core';

interface TimelineItem {
  date: string;
  icon: string;
  title: string;
  subtitle: string;
  subsubtitle?: string;
  skills?: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  timeline: TimelineItem[] = [
    {
      date: '2011',
      icon: 'fa-graduation-cap',
      title: 'STARTED SOME COURSES',
      subtitle: 'AT Sistema Novo de Ensino and Microlins',
      description: 'I started my educational carrear doing some courses like: Windows, Office package, assembly computers, fixing hardware problems and assembly networks.',
      skills: 'Windows · Office · Hardware · Networks'
    },
    {
      date: '2011',
      icon: 'fa-graduation-cap',
      title: 'START STUDYING ENGLISH',
      subtitle: 'COOPLEM Idiomas',
      description: 'In 2011 I started learn english, finishing all the course in 2015.',
    },
    {
      date: '2014',
      icon: 'fa-code',
      title: 'COMPUTER TECHNICIAN',
      subtitle: 'Freelancer',
      description: 'Since 2014, as a hobby, in my free time, I have been carrying out maintenance, assembly, cleaning, installation and formatting of computers and notebooks, installation of local networks and crimping of cables.',
      skills: 'Computer Maintenance · Computer Assembly · Computer Cleaning · Network Installation · Cable Crimping'
    },
    {
      date: '2014',
      icon: 'fa-graduation-cap',
      title: 'UnB - University Of Brasília',
      subtitle: 'Licentiate degree - Computer Science',
      description: 'In 2019, the University of Brasília (UnB) was voted the ninth-best university in Brazil. 2017 was the last year the program was evaluated, and computer science received the highest score in the ENADE (National Student Performance Exam).'
    },
    {
      date: '2016',
      icon: 'fa-code',
      title: 'FRONTEND DEVELOPER',
      subtitle: 'Frontend Developer at Basis Tecnologia da Informação.',
      subsubtitle : 'Hello World! :)',
      description: 'I worked with a development platform called Outsystems. After a few projects using this framework, I began using JavaScript, CSS, HTML, Protractor, and Angular 1. Throughout development, we used the agile methodology, adhering to all the prescribed procedures. I also had experience as a requirements analyst and developed some manuals and screen prototypes, which I worked directly with the client. ​ Skills: Protractor · OutSystems · AngularJS · Metodologias ágeis no desenvolvimento web · JavaScript',
      skills: 'OutSystems · AngularJS · JavaScript · Protractor · Agile Methodologies'
    },
    {
      date: '2018',
      icon: 'fa-code',
      title: 'INFORMATION TECHNOLOGY SUPPORT ANALYST',
      subtitle: "Information Technology Support Analyst at ESMPU (Higher School of the Public Prosecutor's Office of the Union)",
      description: 'I worked as an intern at the Federal Public Prosecutor\'s Office (ESMPU). I was responsible for providing support to all public employees at the school for activities involving computing. My responsibilities included troubleshooting network issues, formatting and configuring computers, providing software support, and installing and configuring paid software, such as Tableau.',
      skills: 'IT Support · IT Service Desk · IT Operations'
    },
    {
      date: '2018',
      icon: 'fa-code',
      title: 'FRONTEND DEVELOPER',
      subtitle: 'Frontend Developer at Brazil\'s Senate',
      description: "I worked as a front-end developer and was responsible for all front-end development for the team. My team was creating platforms for internal Senate use and external use by the general public. I used technologies such as: JavaScript, HTML, CSS, Bootstrap, JQuery, Python, Django, Ruby on Rails, Moodle, GitHub, GitLab, Docker, JIRA, Trello, Slack, Pentaho, OSCM. The platforms I developed were: the CAPACITA Portal, the model school's Moodle theme, the Brazilian Legislative Institute's (ILB) Moodle theme, the model school's web service integration, the INTERLEGIS authentication center, the legislative virtual school (EVL) portal, the INTERLEGIS project dashboard, the ILB information management system, the IT coordination information dashboard, and the Senate's educational knowledge portal page.", 
      skills: 'JavaScript · HTML · CSS · Bootstrap · GitHub · Python · Django · Ruby on Rails · Moodle · Docker · JIRA · Trello · Slack'
    },
    {
      date: '2019',
      icon: 'fa-code',
      title: 'Computer Science Teacher',
      subtitle: 'Computer Science Teacher​',
      description: 'As a Computer Science undergraduate student at the University of Brasília (UnB), I taught computer science to students aged 9 and 10 at a public school in Asa Norte (Brasília). The main focus of the classes was basic computing, aiming to develop the students\' computational thinking. The topics covered and taught were: proper use of a mouse and keyboard, how to connect and disconnect computer cables, search online, edit documents and text, create slideshows, develop typing skills, develop logical thinking skills, and how to use tablets. All classes were planned and taught in collaboration with my partner Artur. We made all the materials created public to help other volunteers and teachers who want to teach this topic to children.', 
      skills: 'Computational Thinking · IT Class · Teaching · Development of computational skills', 
    },
    {
      date: '2020',
      icon: 'fa-code',
      title: 'INFORMATION TECHNOLOGY SUPPORT ANALYST',
      subtitle: 'INFORMATION TECHNOLOGY SUPPORT ANALYST at Brazil\'s Central Bank - BACEN.',
      description: 'I was responsible for supporting the Information Technology Department (DEINF) team at the Central Bank of Brazil (BACEN), more specifically the team responsible for the Micro Focus Service Manager software. I was responsible for supporting the Information Technology Department (DEINF) team at the Central Bank of Brazil (BACEN), more specifically the team responsible for the Micro Focus Service Manager software.',
      skills: 'Scrum · Service Manager · Micro Focus · ITIL · IT Service Management · IT Service Desk · IT Support · IT Operations'
    },
    {
      date: '2021',
      icon: 'fa-code',
      title: 'FRONTEND DEVELOPER - I.T MID-LEVEL ASSISTANT',
      subtitle: 'IT mid-level assistant at Caixa Econômica Federal.​',
      description: 'I passed the public exam and became a federal civil servant in 2021. Working as front-end developer in the social programs community at Caixa Econômica Federal. The languages/frameworks/technologies I use in the projects I\'m responsible for are: Angular 11, TypeScript, HTML, SCSS, Figma and Azure. I also work as a Scrum Master and substitute IT project coordinator. Skills: HTML5 · Scrum Master · SCSS · Angular · Azure DevOps · Project Management · FIGMA · GIT',
      skills: 'Angular · TypeScript · HTML · SCSS · Figma · Azure DevOps · Scrum Master · Project Management',
    },
  ];
}