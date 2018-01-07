import { Component, OnInit } from '@angular/core';

import { IMenuItem } from './menu-item';
import { MenuService } from './menu.service';
import { AuthService } from '../../../services/auth.service';
import { ApiService } from '../../../services/api.service';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService],
  host: {
    'class': 'app-menu'
  }
})
export class MenuComponent implements OnInit {
  menuItems: IMenuItem[];
  groupCounts = 0;

  constructor( private menuService: MenuService, private auth: AuthService, private apiService: ApiService ) {
  }

  getMenuItems(): void {
    this.menuService.getMenuItems().then(menuItems => {
      this.menuItems = menuItems;
      this.apiService.groupCounts.subscribe((data: any) => {
        this.menuItems[1].badge.text = data;
        this.groupCounts = data;
      });
    });
  }

  getLiClasses(item: any, isActive: any) {
    this.menuItems.map(d => {
      if (d.title === item.title && (item.active || isActive)) {
        d.active = true;
      } else {
        d.active = false;
      }
    });
    return {
      'has-sub': item.sub,
      'active': item.active || isActive,
      'menu-item-group': item.groupTitle,
      'disabled': item.disabled
    };
  }
  getStyles(item: any) {
    return {
      'background': item.bg,
      'color': item.color
    };
  }

  ngOnInit(): void {
    this.getMenuItems();
  }

  toggle(event: Event, item: any, el: any) {
    event.preventDefault();
    this.apiService.isMenuClicked = true;

    let items: any[] = el.menuItems;

    if (item.active) {
      item.active = false;
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i].active = false;
      }
      item.active = true;
    }

    if (item.title === 'groups') {
      this.apiService.isMenuClicked = false;
      this.apiService.groupCounts.next(this.groupCounts);
    }

    this.apiService.isClickedDetails.next(false);
    this.apiService.initHeaderGroup.next('');
  }

  changeGroup(item) {
    this.apiService.groupId.next(item.data);
  }
}
