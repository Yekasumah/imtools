import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterbvnComponent } from './enterbvn.component';

describe('EnterbvnComponent', () => {
  let component: EnterbvnComponent;
  let fixture: ComponentFixture<EnterbvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterbvnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterbvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
