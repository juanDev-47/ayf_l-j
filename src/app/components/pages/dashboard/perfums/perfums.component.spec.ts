import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumsComponent } from './perfums.component';

describe('PerfumsComponent', () => {
  let component: PerfumsComponent;
  let fixture: ComponentFixture<PerfumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfumsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
