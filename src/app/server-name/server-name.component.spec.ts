import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNameComponent } from './server-name.component';

describe('ServerNameComponent', () => {
  let component: ServerNameComponent;
  let fixture: ComponentFixture<ServerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
