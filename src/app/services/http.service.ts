import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface Video{
  _video_id             : string;
   timestamp            : number;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = environment.BASE_URI;

  constructor(private readonly _http: HttpClient) {}

  public setThumbnail( video : Video ){
    let httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.post(this.url+"/generateThumbail",video,httpOptions);
  }

  public createVideo(){
    let httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type': 'video/mp4',
        'X-Amz-ACL' : 'public-read'
      })
    }
    return this._http.put<any>(this.url+'/createVideo', httpOptions);
  }




  
}
