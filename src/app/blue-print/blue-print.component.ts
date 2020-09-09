import { Component, OnInit, EventEmitter, Output,Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-blue-print',
  templateUrl: './blue-print.component.html',
  styleUrls: ['./blue-print.component.css']
})
export class BluePrintComponent implements OnInit {
//newserverName ='';
//newserverContent ='';
@Output() serverCreated = new EventEmitter <{serverName:string,serverContent:string}>();
@Output('bpCreated') blueprintCreated = new EventEmitter 
 <{serverName:string,serverContent:string}>();

 @ViewChild ('serverContentInput') serverContentInput:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddserver(nameInput:HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }
  onAddblueprint(nameInput:HTMLInputElement){
    //this.serverContentInput.nativeElement.value='something';
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
   }
}
