import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  words: string;
  
  constructor( 
    private _router : Router) { }

  ngOnInit(): void {
  }

  goToUpload(){
    this._router.navigate(["/upload"]);
  }

  getCoincidences() {
    const queryParams: any = {};
    queryParams.words = JSON.stringify(this.words);
    const navigationExtras: NavigationExtras = {queryParams}
    this._router.navigate(["/video-response"], navigationExtras);
  }
}
