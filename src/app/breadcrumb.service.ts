import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IBreadcrumb {
  text: string;
}
@Injectable()
export class BreadcrumbService {
  breadCrumbs = new BehaviorSubject([
    { text: 'Home' },
    { text: 'Shopping Cart' }
  ]);

  push(breadCrumbs: Array<IBreadcrumb>) {
    this.breadCrumbs.next(breadCrumbs);
  }
}
