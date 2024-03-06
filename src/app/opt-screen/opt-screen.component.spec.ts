import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptScreenComponent } from './opt-screen.component';

describe('OptScreenComponent', () => {
  let component: OptScreenComponent;
  let fixture: ComponentFixture<OptScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
