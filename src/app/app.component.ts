import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  breadCrumbs;
  constructor(private breadcrumbService: BreadcrumbService) {

  }
  ngOnInit() {
    this.breadcrumbService.breadCrumbs
      .subscribe(data => {
        this.breadCrumbs = data;
      });
  }

}
