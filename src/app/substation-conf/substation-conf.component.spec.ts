import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustationConfComponent } from './substation-conf.component';

describe('SustationConfComponent', () => {
  let component: SustationConfComponent;
  let fixture: ComponentFixture<SustationConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustationConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustationConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
