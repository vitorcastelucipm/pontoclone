import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isShowing: boolean;
  tabs = [
    {
      id: "1",
      label: "Meu Perfil",
      active: false,
      icon:"person",
    },
    {
      id: "2",
      label: "Meu Ponto",
      active: false,
      icon:"schedule",
    },
  ];
  constructor() { }

  ngOnInit() {
    this.isShowing = true
    this.tabs[0].active = true;
  }

  toggleSidenav() {
    this.isShowing = !this.isShowing
  }

  callMethods() {
    this.toggleSidenav();
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
