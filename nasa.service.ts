import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  public rootURL = 'dev';

  constructor(private http: HttpClient) { }

  public getInfo(){
    return this.http.get(this.rootURL);
  }

}
