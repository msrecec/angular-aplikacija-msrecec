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

    if(!researchName || !manufacturerName || !vaccineType || !requiredNumberOfShots || !availableNumberOfShots) {
      return;
    }

    if(requiredNumberOfShots <= 0) {
      return;
    }

    const sideEffects = this.sideEffects.map(s => {
      const element = <HTMLInputElement>document.getElementById(s.shortDescription);
      const frequency = <HTMLInputElement>document.getElementById(`${s.shortDescription}frequency`);
      if(element&&element.checked&&frequency) {
        s.frequency = +frequency.value;
      }
      return s;
    }).filter(s => {
      const element = <HTMLInputElement>document.getElementById(s.shortDescription);
      return element&&element.checked;
    });

    sideEffects.map(s => console.log(s));

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

}
