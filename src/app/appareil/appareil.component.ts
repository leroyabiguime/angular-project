import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  appareilName: string = 'Machine à laver'
  // @Input() appareilName: string;

  appareilStatus: string = 'éteint'


  constructor() { }

  ngOnInit(): void {
  }
  getStatus() {
    return this.appareilStatus;
  }

}
