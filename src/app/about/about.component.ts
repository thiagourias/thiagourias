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
interface SkillsItem {
  skillTitle?: string;
  skillDescription?: string;
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
      subsubtitle: 'Hello World! :)',
      description: 'Experience as a developer using the OutSystems platform and web technologies such as JavaScript, CSS, HTML, and AngularJS. Also have skills in automated testing with Protractor and experience with agile methodologies. My role went beyond just coding, as I also worked as a requirements analyst, creating manuals and prototypes while interacting directly with clients.',
      skills: 'OutSystems · AngularJS · JavaScript · Protractor · Agile Methodologies'
    },
    {
      date: '2018',
      icon: 'fa-code',
      title: 'INFORMATION TECHNOLOGY SUPPORT ANALYST',
      subtitle: "Information Technology Support Analyst at ESMPU",
      description: 'I worked as an intern at the Federal Public Prosecutor\'s Office (ESMPU). I was responsible for providing support to all public employees at the school for activities involving computing. My responsibilities included troubleshooting network issues, formatting and configuring computers, providing software support, and installing and configuring paid software, such as Tableau.',
      skills: 'IT Support · IT Service Desk · IT Operations'
    },
    {
      date: '2018',
      icon: 'fa-code',
      title: 'FRONTEND DEVELOPER',
      subtitle: 'Frontend Developer at Brazil\'s Senate',
      description: "As a front-end developer, I was responsible for the development of several platforms for both internal Senate use and the general public. My main responsibilities included creating portals, Moodle themes, and information management systems. I used a wide range of technologies, including JavaScript, HTML, CSS, Bootstrap, JQuery, Python, Django, Ruby on Rails, Moodle, and tools like GitHub, Docker, JIRA, and Slack.",
      skills: 'JavaScript · HTML · CSS · Bootstrap · GitHub · Python · Django · Ruby on Rails · Moodle · Docker · JIRA · Trello · Slack'
    },
    {
      date: '2019',
      icon: 'fa-code',
      title: 'Computer Science Teacher',
      subtitle: 'Computer Science Teacher​',
      description: 'As a Computer Science student at the University of Brasília (UnB), I taught basic computing classes to children aged 9 to 10 at a public school in Brasília. The focus was on developing computational thinking, covering everything from hardware usage (mouse, keyboard) to creating documents, conducting online research, and building logical reasoning skills. All teaching materials, created in collaboration with a colleague, were made publicly available.',
      skills: 'Computational Thinking · IT Class · Teaching · Development of computational skills',
    },
    {
      date: '2020',
      icon: 'fa-code',
      title: 'INFORMATION TECHNOLOGY SUPPORT ANALYST',
      subtitle: 'INFORMATION TECHNOLOGY SUPPORT ANALYST at Brazil\'s Central Bank - BACEN.',
      description: 'I was responsible for supporting the Information Technology Department (DEINF) team at the Central Bank of Brazil (BACEN), more specifically the team responsible for the Micro Focus Service Manager software. I was responsible for supporting the DEINF team at the BACEN, more specifically the team responsible for the Micro Focus Service Manager software.',
      skills: 'Scrum · Service Manager · Micro Focus · ITIL · IT Service Management · IT Service Desk · IT Support · IT Operations'
    },
    {
      date: '2021',
      icon: 'fa-code',
      title: 'FRONTEND DEVELOPER - I.T MID-LEVEL ASSISTANT',
      subtitle: 'IT mid-level assistant at Caixa Econômica Federal.​',
      description: 'I passed the public exam and became a federal civil servant in 2021. Working as front-end developer in the social programs community at Caixa Econômica Federal. The languages/frameworks/technologies I use in the projects I\'m responsible for are: Angular 11, TypeScript, HTML, SCSS, Figma and Azure. I also work as a Scrum Master and substitute IT project coordinator.',
      skills: 'Angular · TypeScript · HTML · SCSS · Figma · Azure DevOps · Scrum Master · Project Management',
    },
  ];

  skills: SkillsItem[] = [
    {
      skillTitle: 'Frontend Development',
      skillDescription: 'Angular, JavaScript, HTML, SCSS, Bootstrap',
    },
    {
      skillTitle: 'Agile Methodologies',
      skillDescription: 'Scrum, Kanban, Trello, JIRA',
    },
    {
      skillTitle: 'Design & Prototyping',
      skillDescription: 'Figma, UX/UI',
    },
    {
      skillTitle: 'Project Management',
      skillDescription: 'Azure DevOps, GitHub, GitLab',
    },
    {
      skillTitle: 'Infrastructure & Support',
      skillDescription: 'ITIL, Service Desk, Micro Focus',
    },
    {
      skillTitle: 'Education & Training',
      skillDescription: 'Computer Science Licentiate, teaching computing to children',
    },
  ];
}