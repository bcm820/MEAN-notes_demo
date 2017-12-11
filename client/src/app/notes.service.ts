import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotesService {

  constructor(private _http: HttpClient) { }

  list(){
    return this._http.get('/api/list');
  }

  create(note){
    return this._http.post('/api/create', note);
  }

}
