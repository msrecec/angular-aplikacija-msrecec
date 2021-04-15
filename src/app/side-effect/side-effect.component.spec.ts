import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideEffectComponent } from './side-effect.component';

describe('SideEffectComponent', () => {
  let component: SideEffectComponent;
  let fixture: ComponentFixture<SideEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
