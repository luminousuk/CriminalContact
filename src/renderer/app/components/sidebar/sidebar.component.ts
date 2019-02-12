import { Component, OnInit } from '@angular/core';

interface ISidebarItem {
  iconClass: string;
  title: string;
  route: string;
  floatBottom: boolean;
}

@Component({
  selector: 'cc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: ISidebarItem[] = [
    {
      iconClass: "home",
      title: "Dashboard",
      route: "/dashboard",
      floatBottom: false
    },
    {
      iconClass: "people",
      title: "Players",
      route: "/players",
      floatBottom: false
    },
    {
      iconClass: "credit_card",
      title: "Banking",
      route: "/banking",
      floatBottom: false
    },
    {
      iconClass: "settings",
      title: "Settings",
      route: "/settings",
      floatBottom: true
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
