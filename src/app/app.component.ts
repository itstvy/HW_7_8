import { HomeService } from './services/home.service';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ShopPage';
  constructor(private sidebarService: NbSidebarService, private page: HomeService) {
  }
  ngOnInit(): void {
    this.page.getArtical(1,10);
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }


  items:any = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: 'home',
    },
    {
      title: 'Favorite',
      icon: 'heart-outline',
      link: 'about',
    },
    {
      title: 'Help',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    // {
    //   title: 'Logout',
    //   icon: 'unlock-outline',
    // },
  ];
}
