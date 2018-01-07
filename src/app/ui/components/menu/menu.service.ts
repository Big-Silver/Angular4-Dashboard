import { Injectable } from '@angular/core';

import { IMenuItem } from './menu-item';
import { MENUITEMS } from './mock-menu-items';

@Injectable()
export class MenuService {
  getMenuItems(): Promise<IMenuItem[]> {
    return Promise.resolve(MENUITEMS);
  }
}