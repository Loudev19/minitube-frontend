import { Component, OnInit, Input } from '@angular/core';
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
  words: string;
  imgSrc: string;
  currentVideo: Video;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _videoResponseService: VideoResponseService) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(
      (params) => {
        this.coincidences = [];
        this.words = params.get('words')
        if (this.words === null) {
          this.coincidences  = [];
        } else {
          let labels: string = JSON.parse(this.words);
          this.getCoincidences(labels)
        }
      }
    )
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

  onPlay(video: Video) {
    this.currentVideo = video
  }

}
