import { Component, OnInit } from '@angular/core';
import {ObserverService} from './observer.service'

@Component({
  selector: 'observer-root',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css'],
  providers: [ObserverService]
})
export class ObserverComponent implements OnInit{
  title = 'app';
  nowTime = 10;
  constructor(private appService: ObserverService){

  }

  ngOnInit(){
    this.appService.nowTime$.subscribe(value => {
        console.log(value);
        this.nowTime = value;
    });
  }
}
