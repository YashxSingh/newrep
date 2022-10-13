import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimdtoComponent } from './victimdto.component';

describe('VictimdtoComponent', () => {
  let component: VictimdtoComponent;
  let fixture: ComponentFixture<VictimdtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimdtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimdtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
