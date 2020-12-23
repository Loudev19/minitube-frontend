import { Component } from '@angular/core';
import { VideoResponseService } from "./services/video-response.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minitube';

  words: string;

  constructor(private _videoResponseService: VideoResponseService) {}

  getCoincidences() {
    this._videoResponseService.searchCoincidences(this.words)
  }
}
