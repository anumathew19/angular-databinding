import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluePrintComponent } from './blue-print.component';

describe('BluePrintComponent', () => {
  let component: BluePrintComponent;
  let fixture: ComponentFixture<BluePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
