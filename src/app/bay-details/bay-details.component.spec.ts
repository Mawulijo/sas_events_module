import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayDetailsComponent } from './bay-details.component';

describe('BayDetailsComponent', () => {
  let component: BayDetailsComponent;
  let fixture: ComponentFixture<BayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
