import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AlertService {
  public subject: Subject<any> = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // router.events.subscribe(event => {
    //   if (event instanceof NavigationStart ) {
    //     if (this.keepAfterNavigationChange) {
    //       this.keepAfterNavigationChange = false;
    //     } else {
    //       this.subject.next();
    //     }
    //   };
    // });
   }

   public success(message: string, keepAfterNavigationChange = false) {
     //this.keepAfterNavigationChange = keepAfterNavigationChange;
     this.subject.next({type: 'success', text: message});
   };

   public error(message: string, keepAfterNavigationChange = false) {
     console.log(message)
   // this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({type: 'error', text: message});
   };

  //  getMessage(): Observable<any> {
  //    console.log('sdsds')
  //    return this.subject.asObservable();
  //  }
}
