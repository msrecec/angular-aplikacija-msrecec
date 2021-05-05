import { Component, OnInit } from '@angular/core';
import { SideEffect } from '../side-effect';
import { SideEffectService } from '../side-effect.service';
import { Vaccine } from '../vaccine';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css']
})
export class VaccinesComponent implements OnInit {

  vaccines: Vaccine[] = [];
  sideEffects: SideEffect[] = [];
  selectedVaccine: Vaccine | undefined;
  checkedSideEffects: string[] = [];

  constructor(private vaccineService: VaccineService, private sideEffectService: SideEffectService) { }

  ngOnInit(): void {
    this.getVaccines();
    this.getSideEffects();
  }

  getVaccines(): void {
    this.vaccineService.getVaccines().subscribe(vaccines => this.vaccines = vaccines);
  }

  getSideEffects(): void {
    this.sideEffectService.getSideEffects().subscribe(sideEffects => this.sideEffects = sideEffects);
  }

  add(researchName: string, manufacturerName: string, vaccineType: string, requiredNumberOfShots: number, availableNumberOfShots: number , approved: boolean): void {
    researchName = researchName.trim();
    manufacturerName = manufacturerName.trim();
    vaccineType = vaccineType.trim();
    const sideEffects = this.checkedSideEffects

    if(!researchName || !manufacturerName || !vaccineType || !requiredNumberOfShots || !availableNumberOfShots) {
      return;
    }

    if(requiredNumberOfShots <= 0) {
      return;
    }

    this.vaccineService.addVaccine({ researchName, manufacturerName, vaccineType, requiredNumberOfShots, availableNumberOfShots, approved, sideEffects } as Vaccine)
      .subscribe(vaccine => {
        this.vaccines.push(vaccine);
      });
  }

  delete(vaccine: Vaccine | string): void {
    this.vaccines = this.vaccines.filter(v => v!== vaccine);
    this.vaccineService.deleteVaccine(vaccine).subscribe();
  }

  onSelect(vaccine: Vaccine): void {
    this.selectedVaccine = vaccine;
  }

  onCheck(shortDescription: string) {
    const element = <HTMLInputElement>document.getElementById(shortDescription);
    if(element) {
      if(element.checked) {
        this.checkedSideEffects.push(shortDescription);
      } else {
        this.checkedSideEffects = this.checkedSideEffects.filter((value, index, arr) => {
          return value !== shortDescription;
        })
      }
    }
  }

}
