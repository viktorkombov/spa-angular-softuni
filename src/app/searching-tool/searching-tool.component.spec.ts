import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingToolComponent } from './searching-tool.component';

describe('SearchingToolComponent', () => {
  let component: SearchingToolComponent;
  let fixture: ComponentFixture<SearchingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
