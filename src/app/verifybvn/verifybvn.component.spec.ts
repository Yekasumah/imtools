import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifybvnComponent } from './verifybvn.component';

describe('VerifybvnComponent', () => {
  let component: VerifybvnComponent;
  let fixture: ComponentFixture<VerifybvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifybvnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifybvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
