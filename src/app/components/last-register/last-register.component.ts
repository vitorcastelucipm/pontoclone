import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-register',
  templateUrl: './last-register.component.html',
  styleUrls: ['./last-register.component.scss']
})
export class LastRegisterComponent implements OnInit {

  time_cards = [
    {
      id: '1',
      icon: 'work_outline',
      circle: 'circle',
      time: '08:25',
      date: '[27/07/2021] Registrou uma entrada',
      message: 'Registrou ponto em Rua Emílio Belloni, 87 - Santa Felicidade, Curitiba - PR, 82020-420, Brasil'
    },
    {
      id: '2',
      icon: 'chair',
      circle: 'circle',
      time: '11:56',
      date: '[27/07/2021] Registrou uma entrada',
      message: 'Registrou ponto em Rua Emílio Belloni, 87 - Santa Felicidade, Curitiba - PR, 82020-420, Brasil'
    },
    {
      id:'1',
      icon: 'work_outline',
      circle: 'circle',
      time: '13:27',
      date: '[27/07/2021] Registrou uma entrada',
      message: 'Registrou ponto em Rua Emílio Belloni, 87 - Santa Felicidade, Curitiba - PR, 82020-420, Brasil'
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
