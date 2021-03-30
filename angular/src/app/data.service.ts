import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient:HttpClient) { }
  getData(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/user');
  }
}
