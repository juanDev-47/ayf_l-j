import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsbuttonAtomComponent } from './wsbutton-atom.component';

describe('WsbuttonAtomComponent', () => {
  let component: WsbuttonAtomComponent;
  let fixture: ComponentFixture<WsbuttonAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WsbuttonAtomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WsbuttonAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
