import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appLogo = "../../../../assets/img/icons/header/balco_logo.png";
  headerImage1 = "../../../../assets/img/icons/header/header_img1.png";
  headerImage2 = "../../../../assets/img/icons/header/header_img2.png";

}
