import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closing-mirror',
  templateUrl: './closing-mirror.component.html',
  styleUrls: ['./closing-mirror.component.scss']
})
export class ClosingMirrorComponent implements OnInit {

  closing_mirrors = [
    {
      date:'01/06/2021 - 30/06/2021',
      resume: 'Horas normais: 159:09 Horas extras (50%): 06:15 Horas extras (100%): 00:00',
      circle: 'circle',
      icon: 'schedule',
    },
    {
      date:'01/05/2021 - 31/05/2021',
      resume: 'Horas normais: 168:00 Horas extras (50%): 05:47 Horas extras (100%): 00:00',
      circle: 'circle',
      icon: 'schedule',
    },
    {
      date:'01/04/2021 - 30/04/2021',
      resume: 'Horas normais: 157:23 Horas extras (50%): 02:15 Horas extras (100%): 00:00',
      circle: 'circle',
      icon: 'schedule',
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
