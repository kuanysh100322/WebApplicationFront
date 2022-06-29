import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Hero} from "./hero.model";

const baseUrl = 'http://localhost:8080/all';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getDetails(id: any): Observable<Hero> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // findByName(name: any): Observable<any> {
  //   return this.http.post('http://localhost:8080/search/'${name}, name);
  // }
  // public findByName(name:any){
  //   return this.http.get(`${baseUrl}/search/{name}`);
  // }

}
