import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  list: any = [];
  
  constructor(private _ns: NotesService) {
    this.getNotes();
  }

  ngOnInit() {
  }

  getNotes(){
    this._ns.list().subscribe(list => this.list = list);
  }

}