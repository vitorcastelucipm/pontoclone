import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  journeys = [
    {
      date: '27/07/2021',
      circle:'circle',
      icon: 'check',
      title: '[Terça-Feira] Sem Ocorrências',
      message:'Entrada 08:25 - Saída 11:56 Entrada 13:27 - Saída 17:57 Entrada 18:12 - Saída 18:30',
      extra_time: '00:19',
      missing_time: '00:00',
    },
    {
      date: '26/07/2021',
      circle:'circle',
      icon: 'check',
      title: '[Segunda-Feira] Sem Ocorrências',
      message:'Entrada 08:25 - Saída 11:56 Entrada 13:27 - Saída 17:57 Entrada 18:12 - Saída 18:30',
      extra_time: '00:00',
      missing_time: '00:00',
    },
    {
      date: '23/07/2021',
      circle:'circle',
      icon: 'check',
      title: '[Sexta-Feira] Sem Ocorrências',
      message:'Entrada 08:25 - Saída 11:56 Entrada 13:27 - Saída 17:57 Entrada 18:12 - Saída 18:30',
      extra_time: '00:00',
      missing_time: '00:00',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
