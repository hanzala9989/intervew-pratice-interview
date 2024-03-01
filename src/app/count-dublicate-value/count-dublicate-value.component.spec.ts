import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDublicateValueComponent } from './count-dublicate-value.component';

describe('CountDublicateValueComponent', () => {
  let component: CountDublicateValueComponent;
  let fixture: ComponentFixture<CountDublicateValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDublicateValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDublicateValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
