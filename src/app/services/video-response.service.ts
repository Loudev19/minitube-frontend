import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Video } from '../video-responses/interfaces';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VideoResponseService {

  searchUrl:string = 'https://xse0s9zajf.execute-api.us-east-1.amazonaws.com/test/search?query=';

  constructor(private http: HttpClient){ }

  searchCoincidences(labels: string): Observable<Video[]> {
    return this.http.get<Video[]>(this.searchUrl+labels).pipe(
      tap(data => console.log('tap', data))
    );
  }
}

