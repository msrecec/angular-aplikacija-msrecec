import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideEffectDetailComponent } from './side-effect-detail.component';

describe('SideEffectDetailComponent', () => {
  let component: SideEffectDetailComponent;
  let fixture: ComponentFixture<SideEffectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideEffectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideEffectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
