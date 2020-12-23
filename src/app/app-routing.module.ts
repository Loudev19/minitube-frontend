import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UploadvideoComponent } from './pages/uploadvideo/uploadvideo.component';


import { VideoResponsesComponent } from "src/app/video-responses/video-responses.component";

const routes: Routes = [
  {
    path: 'video-response',
    component: VideoResponsesComponent
  }
  ,{
    path      : 'home',
    component : HomeComponent
  },
  {
    path      : 'upload',
    component : UploadvideoComponent
  },
  {
    path      : "**" , 
    pathMatch : "full" ,
    redirectTo : "home"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
