import { Component, Input, OnInit } from '@angular/core';
import { Vaccine } from '../vaccine';

@Component({
  selector: 'app-vaccine-info',
  templateUrl: './vaccine-info.component.html',
  styleUrls: ['./vaccine-info.component.css']
})
export class VaccineInfoComponent implements OnInit {

  @Input() vaccine: Vaccine | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
