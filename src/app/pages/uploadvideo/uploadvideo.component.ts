import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { Video_preURL, Label } from './../../models/video_url'
import { ThrowStmt } from '@angular/compiler';


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
  end : Boolean =  false;
  labels : String [] = []
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
    this._http_service.putVideo( this.video_url.presigned_url, this._file).subscribe(data => {
      console.log(data);
      this.state= true;
    });
  }

  selectThumbnail(){
    if(this.currentTime === undefined)
    {
      alert('Dont forget move the cursor of the video to select a thumbnail');
    }
    else
    {
      this._http_service.setThumbnail(this.video_url.video_id, this.currentTime).subscribe( ( labels : String[]) => 
      {
        this.labels = labels;
        console.log(labels);
        this.end = true;
      }
      );
    
    }

  }
  ngOnInit(): void {
  }
  

}
