import { Component, OnInit } from '@angular/core';

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

}
