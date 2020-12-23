import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoResponseService {

  private url: string = environment.BASE_URI;
  constructor(private http: HttpClient) { }

  searchCoincidences(labels: string) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.get(this.url+'/search?query='+labels, {headers}).subscribe(
      val => console.log(val),
      error => console.log(error)
    );
  }
}
