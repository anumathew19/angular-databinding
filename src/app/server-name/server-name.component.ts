import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-name',
  templateUrl: './server-name.component.html',
  styleUrls: ['./server-name.component.css'],
//  encapsulation: ViewEncapsulation.Native   //none/native
})
export class ServerNameComponent implements OnInit {
@Input('srvElement') element:{type:string, name:string, content:string}
  constructor() { }

  ngOnInit(): void {
  }

}
