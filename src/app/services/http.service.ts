import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = environment.BASE_URI;

  constructor(private readonly _http: HttpClient ) {}

  public setThumbnail( video_id : String, timestamp : number){
    timestamp = Math.round(timestamp);
    let postData = { "video_id" : video_id , "timestamp": timestamp };
    console.log(postData);
    let httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.post(this.url+"/generateThumbnail",postData,httpOptions);
  }
  public createVideo()
  {
    return this._http.get<any>(this.url+'/createVideo');
  }

  public putVideo( video_url , file){
    let httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type': 'video/mp4',
        'X-Amz-ACL' : 'public-read'
      })
    }
    return this._http.put<any>( video_url, file , httpOptions );
  } 
  
}
