import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class ObserverService{
    nowTime$: Observable<any>;

    constructor(){
        this.nowTime$ = Observable.create((observer : Observer<any>) => {
        for(let i = 0; i < 100; i++){
            setTimeout(function(){
                observer.next(10 - i);
                if(i == 10)
                    observer.complete();
            }, i * 1000);
        }
            }
        )
    }
}