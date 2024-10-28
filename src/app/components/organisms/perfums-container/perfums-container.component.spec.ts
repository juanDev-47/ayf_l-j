import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumsContainerComponent } from './perfums-container.component';

describe('PerfumsContainerComponent', () => {
  let component: PerfumsContainerComponent;
  let fixture: ComponentFixture<PerfumsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfumsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfumsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
