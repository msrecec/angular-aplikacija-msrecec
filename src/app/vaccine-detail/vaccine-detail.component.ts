import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaccine } from '../vaccine';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-vaccine-detail',
  templateUrl: './vaccine-detail.component.html',
  styleUrls: ['./vaccine-detail.component.css']
})
export class VaccineDetailComponent implements OnInit {

  vaccine: Vaccine | undefined;

  private researchName: String | '';


  constructor(private _location: Location, private vaccineService: VaccineService, private route: ActivatedRoute) {

    this.researchName = '';

  }

  backClicked() {
    this._location.back();
  }


  getVaccine(): void {
    this.vaccineService.getVaccineByResearchName(this.researchName).subscribe(v => this.vaccine = v);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.researchName = params['researchName'];
    });

    this.getVaccine();

  }

}
