import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelldataService {
   url = "https://codestaginggcw.herokuapp.com/wells-list";

  constructor(private http:HttpClient) { }
  wells()
  {
    return this.http.get(this.url)
  }
}
