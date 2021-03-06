import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SideEffect } from '../side-effect';
import { SideEffectService } from '../side-effect.service';

@Component({
  selector: 'app-side-effect',
  templateUrl: './side-effect.component.html',
  styleUrls: ['./side-effect.component.css']
})
export class SideEffectComponent implements OnInit {

  sideEffects: SideEffect[] = [];
  selectedSideEffect: SideEffect | undefined;

  constructor(private sideEffectService: SideEffectService) { }

  ngOnInit(): void {
    this.getSideEffects();
  }

  getSideEffects(): void {
    this.sideEffectService.getSideEffects().subscribe(sideEffects => this.sideEffects = sideEffects);
  }

  getSideEffectsByLongDescription(longDescription: string): void {
    if(longDescription) {
      this.sideEffectService.getSideEffectByLongDescription(longDescription).subscribe(sideEffects => {
        this.sideEffects = sideEffects;
        console.log(sideEffects);
      });
    }
  }

  add(shortDescription: string, longDescription: string, priority: string) {
    shortDescription = shortDescription.trim();
    longDescription = longDescription.trim();
    priority = priority.trim();

    if(!shortDescription || !longDescription || !priority) {
      return;
    }

    this.sideEffectService.addSideEffect({shortDescription, longDescription, priority} as SideEffect)
      .subscribe(sideEffect => {
        this.sideEffects.push(sideEffect);
      })
  }

  delete(sideEffect: SideEffect | string): void {
    this.sideEffects = this.sideEffects.filter(s => s!== sideEffect);
    this.sideEffectService.deleteSideEffect(sideEffect).subscribe();
  }

  onSelect(sideEffect: SideEffect): void {
    this.selectedSideEffect = sideEffect;
  }

}
