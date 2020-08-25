import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IEmpolyee} from './document';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpolyeeService {
private _url: string = "/assets/data/document.json"

  constructor(private http: HttpClient) { }
  getempolyees():Observable<IEmpolyee[]>{
     return this.http.get<IEmpolyee[]>(this._url);
  }
}
