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

  onSelect(sideEffect: SideEffect): void {
    this.selectedSideEffect = sideEffect;
  }

}
