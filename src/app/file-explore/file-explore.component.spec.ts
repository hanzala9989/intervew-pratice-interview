import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExploreComponent } from './file-explore.component';

describe('FileExploreComponent', () => {
  let component: FileExploreComponent;
  let fixture: ComponentFixture<FileExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
