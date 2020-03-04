import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL: string = "https://rdcrud.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {  }

  getGrupos(){
    return this.http.get(URL + "/grupos");
  }
}
