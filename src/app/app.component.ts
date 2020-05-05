import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MatSnackBar } from '@angular/material/snack-bar';

import { StoreService } from './store/store.service';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  store$: Observable<Store>;
  constructor(
    private storeService: StoreService,
    private snackbar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.fetchStoreData();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map(route => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }))
      .pipe(switchMap(route => route.data))
      .subscribe(event => this.titleService.setTitle(`${event.title} - Store Backoffice`));
  }

  fetchStoreData() {
    this.store$ = this.storeService.getStore()
      .pipe(catchError(err => {
        const snackbarRef = this.snackbar.open('Something went wrong, please try again', 'Try Again', { duration: -1 });
        snackbarRef.onAction().subscribe(() => {
          this.fetchStoreData();
        });

        return throwError(err);
      }));
  }
}
