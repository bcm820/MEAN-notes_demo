import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  note = {text:'', date: null};
  
  constructor(private _ns: NotesService, private _app: AppComponent) { }

  ngOnInit() {
  }

  create(){
    this.note.date = new Date();
    this._ns.create(this.note).subscribe(list => this._app.list = list);
    this.note = {text:'', date: null};
  }

}
