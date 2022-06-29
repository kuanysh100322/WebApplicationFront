import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, of, tap} from "rxjs";
import {Hero} from "./hero.model";
const baseUrl = 'http://localhost:8080/all';
@Injectable({
  providedIn: 'root'
})

export class HeroSearchService {
  private baseurl = "http://localhost:8080/all/find";

  constructor(private http: HttpClient) { }

  // search(term: string): Observable<Hero[]> {
  //   let params: URLSearchParams = new URLSearchParams();
  //   params.set('name', term);
  //   // search is deprecated from 4.0.0. Use params instead.
  //   return this.http
  //     .get(this.searchUrl, { params: params })
  //     .map(response => response.json() as Hero[]);
  // }
  // findByName(name: any): Observable<any> {
  //   return this.http.post(`${baseUrl}?name=${name}`);
  // }
  find(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/find', data);
  }
  // findByName(name: any): Observable<any> {
  //     return this.http.post('http://localhost:8080/all/search', name);
  //   }
}
