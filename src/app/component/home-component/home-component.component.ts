import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  specialitiesImglocation = "../../../../assets/img/icons/Specialities/";
  underscoreImg = "../../../../assets/img/icons/underscore/underscore.png";

  specialitesTitles = [
    'Laboratory Services',
    'Radiology',
    'Transfusion Medicine & Blood Centre',
    'Internal Medicine',
    'Haematology',
    'Medical Oncology',
    'Surgical Oncology'
  ];


  slideConfig = { slidesToShow: 5, slidesToScroll: 1 };

}
