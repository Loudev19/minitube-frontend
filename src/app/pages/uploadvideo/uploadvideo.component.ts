import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';

interface Video_preURL{
  video_id: string,
  presigned_url : string
}

@Component({
  selector: 'app-uploadvideo',
  templateUrl: './uploadvideo.component.html',
  styleUrls: ['./uploadvideo.component.scss']
})
export class UploadvideoComponent implements OnInit {
  url;
  format;
  _file;
  currentTime: number;
  state : Boolean = false;
  video_url: Video_preURL;
  constructor( private _http_service : HttpService ) { }

  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      console.log(file);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }

      else{
        alert('please upload a video');
      }
      reader.onload = (event) => {
        this._file = file;
        this._http_service.createVideo().subscribe(( video_url : any ) => this.video_url = video_url );
        this.url = (<FileReader>event.target).result;
      }
    }
  }
  setCurrentTime(data) {
    this.currentTime = data.target.currentTime;
  }

  onUpload(){
    this.state= true;
    console.log(this.video_url.presigned_url);
    console.log(this.video_url.video_id);
    console.log(this._file);
    this._http_service.putVideo( this.video_url.presigned_url, this._file).subscribe(data => {
      console.log(data);
    });
  }
  selectThumbnail(){

    this._http_service.setThumbnail(this.video_url.video_id, this.currentTime).subscribe(data => {
      console.log(data);
    });

  }
  ngOnInit(): void {
  }
  

}
