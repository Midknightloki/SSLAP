import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  
  navLinks=[
      {path: 'ga-home', label: 'GA'},
      {path: 'qa-home', label: 'QA'},
      {path: 'drc-home', label: 'DRC'}
  ];
  activeLink = this.navLinks[0];
  background = 'mat-white';

  constructor() {}

}
