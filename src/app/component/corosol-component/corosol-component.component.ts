import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corosol',
  templateUrl: './corosol-component.component.html',
  styleUrls: ['./corosol-component.component.scss']
})
export class CorosolComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images= ["../../../../assets/img/Banner/banner-1.jpg","../../../../assets/img/Banner/banner-2.jpg","../../../../assets/img/Banner/banner-3.jpg"];

}
