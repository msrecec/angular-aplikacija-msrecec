import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideEffect } from '../side-effect';
import { SideEffectService } from '../side-effect.service';

@Component({
  selector: 'app-side-effect-detail',
  templateUrl: './side-effect-detail.component.html',
  styleUrls: ['./side-effect-detail.component.css']
})
export class SideEffectDetailComponent implements OnInit {

  sideEffect: SideEffect | undefined;

  private shortDescription: String | '';

  constructor(private _location: Location, private sideEffectService: SideEffectService, private route: ActivatedRoute) {

    this.shortDescription = '';

  }


  backClicked() {
    this._location.back();
  }


  getSideEffect(): void {
    this.sideEffectService.getSideEffectByShortDescription(this.shortDescription).subscribe(s => this.sideEffect = s);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.shortDescription = params['shortDescription'];
    });

    this.getSideEffect();
  }

}
