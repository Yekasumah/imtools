import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifypwordComponent } from './verifypword.component';

describe('VerifypwordComponent', () => {
  let component: VerifypwordComponent;
  let fixture: ComponentFixture<VerifypwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifypwordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifypwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
