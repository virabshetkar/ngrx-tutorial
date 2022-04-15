import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-tutorial';
  isNavigating = new Subject<boolean>();
  isNavigating$ = this.isNavigating.asObservable();
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.isNavigating.next(true);
      }
      else if(event instanceof NavigationCancel || event instanceof NavigationEnd || event instanceof NavigationError) {
        this.isNavigating.next(false);
      }
    })
  }
}
