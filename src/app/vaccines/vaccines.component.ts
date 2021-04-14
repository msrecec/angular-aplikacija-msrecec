import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../vaccine';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css']
})
export class VaccinesComponent implements OnInit {

  vaccines: Vaccine[] = [];
  selectedVaccine: Vaccine | undefined;

  constructor(private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.getVaccines();
  }

  getVaccines(): void {
    this.vaccineService.getVaccines().subscribe(vaccines => this.vaccines = vaccines);
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

    this.vaccineService.addVaccine({researchName, manufacturerName, vaccineType, requiredNumberOfShots, availableNumberOfShots, approved} as Vaccine)
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
