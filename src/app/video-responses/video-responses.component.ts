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
  imgSrc: boolean[] = [];
  currentVideo: Video;

  message: string = "Cargando..";

  constructor(
    private activatedRoute: ActivatedRoute,
    private _videoResponseService: VideoResponseService) {}

  ngOnInit(): void {
    this.message = "Cargando..."
    this.activatedRoute.queryParamMap.subscribe(
      (params) => {
        this.coincidences = [];
        this.currentVideo = null;
        this.words = params.get('words')
        if (this.words === null) {
          this.coincidences  = [];
          this.message = "No se encontraron coincidencias";
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
          this.imgSrc.push(false)
        });
      },
      error => {
        this.message = "No se encontraron coincidencias"
      }
    )
  }

  getImgSrc(video: Video, i: number) {
    if (this.imgSrc[i]) return video.preview_url
    return video.thumbnail_url
  }

  onMouseOver(video: Video, i: number) {
    this.imgSrc[i] = true
  }

  onMouseOut(video: Video, i: number) {
    this.imgSrc[i] = false
  }

  onPlay(video: Video) {
    this.currentVideo = video
  }

}
