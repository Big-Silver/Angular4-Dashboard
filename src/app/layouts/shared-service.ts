import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  // Observable string sources
  private emitChangeSource = new Subject();

  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands
  emitChange(change: string) {
    this.emitChangeSource.next(change);
  }
}