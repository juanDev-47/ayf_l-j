import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAtomComponent } from './dropdown-atom.component';

describe('DropdownAtomComponent', () => {
  let component: DropdownAtomComponent;
  let fixture: ComponentFixture<DropdownAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownAtomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
