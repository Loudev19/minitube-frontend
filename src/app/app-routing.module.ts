import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoResponsesComponent } from "src/app/video-responses/video-responses.component";

const routes: Routes = [
  {
    path: 'video-response',
    component: VideoResponsesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
