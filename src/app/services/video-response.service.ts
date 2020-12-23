import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VideoResponseService {

  searchUrl:string = 'https://xse0s9zajf.execute-api.us-east-1.amazonaws.com/test/search?query=';

  constructor(private http: HttpClient) { }

  searchCoincidences(labels: string) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.get(this.searchUrl+labels, {headers}).subscribe(
      val => console.log(val),
      error => console.log(error)
    );
  }
}
