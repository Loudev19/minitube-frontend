import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoResponseService } from './../../services/video-response.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss','./../../app.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'minitube';

  words: string;

  constructor( private _router : Router,private _videoResponseService: VideoResponseService) { }

  ngOnInit(): void {
  }

  goToUpload(){
    this._router.navigate(["/upload"]);
  }

  getCoincidences() {
    this._videoResponseService.searchCoincidences(this.words)
  }

}
