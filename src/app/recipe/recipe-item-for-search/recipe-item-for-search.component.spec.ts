import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemForSearchComponent } from './recipe-item-for-search.component';

describe('RecipeItemComponent', () => {
  let component: RecipeItemForSearchComponent;
  let fixture: ComponentFixture<RecipeItemForSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeItemForSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemForSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
