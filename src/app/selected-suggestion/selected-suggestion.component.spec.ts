import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSuggestionComponent } from './selected-suggestion.component';

describe('SelectedSuggestionComponent', () => {
  let component: SelectedSuggestionComponent;
  let fixture: ComponentFixture<SelectedSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
