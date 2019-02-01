import { Component, OnInit } from '@angular/core';

interface ISidebarItem {
  iconClass: string;
  title: string;
  route: string;
  floatBottom: boolean;
  active: boolean;
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
      floatBottom: false,
      active: true
    },
    {
      iconClass: "people",
      title: "Players",
      route: "/people",
      floatBottom: false,
      active: false
    },
    {
      iconClass: "credit-card",
      title: "Banking",
      route: "/banking",
      floatBottom: false,
      active: false
    },
    {
      iconClass: "cog",
      title: "Settings",
      route: "/settings",
      floatBottom: true,
      active: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
