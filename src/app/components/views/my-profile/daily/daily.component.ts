import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  tabs = [
    {
      id: "1",
      label: "Pontos do dia",
      active: false
    },
    {
      id: "2",
      label: "Jornada de trabalho",
      active: false
    },
    {
      id: "3",
      label: "Espelho ponto",
      active: false
    },
    {
      id: "4",
      label: "Horas extras",
      active: false
    }
  ];

  constructor() { }

  ngOnInit() {
    this.tabs[0].active = true;
  }


  changeTab(id) {
    this.tabs.map(tab => {
      if (tab.id == id) {
        tab.active = true;
      } else {
        tab.active = false;
      }
      return tab;
    });
  }

}
