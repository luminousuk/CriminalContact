import { Component, OnInit } from '@angular/core';

interface ISidebarItem {
  iconClass: string;
  title: string;
  href: string;
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
      title: "Home",
      href: "#",
      floatBottom: false
    },
    {
      iconClass: "bar-chart",
      title: "Dashboard",
      href: "#",
      floatBottom: false
    },
    {
      iconClass: "people",
      title: "Players",
      href: "#",
      floatBottom: false
    },
    {
      iconClass: "credit-card",
      title: "Banking",
      href: "#",
      floatBottom: false
    },
    {
      iconClass: "cog",
      title: "Settings",
      href: "#",
      floatBottom: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
