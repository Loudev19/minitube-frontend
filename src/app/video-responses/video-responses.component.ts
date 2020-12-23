import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from './interfaces';

import { VideoResponseService } from "src/app/services/video-response.service";

@Component({
  selector: 'app-video-responses',
  templateUrl: './video-responses.component.html',
  styleUrls: ['./video-responses.component.scss']
})
export class VideoResponsesComponent implements OnInit {

  coincidences: Video[] = [];

  imgSrc: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _videoResponseService: VideoResponseService) {
    const words = this.activatedRoute.snapshot.queryParamMap.get('words');

    if (words === null) {
      this.coincidences  = [];
    } else {
      let labels: string = JSON.parse(words);
      this.getCoincidences(labels)
    }
    console.log(this.coincidences)
  }

  ngOnInit(): void {
  }

  getCoincidences(words: string) {
    this._videoResponseService.searchCoincidences(words).subscribe(
      (val: any) => {
        val.videos.forEach(element => {
          this.coincidences.push(element)
        });
      },
      error => console.log(error)
    )
  }

  onMouseOver(video: Video) {
    this.imgSrc = video.preview_url
  }

  onMouseOut(video: Video) {
    this.imgSrc = video.thumbnail_url
  }

}
