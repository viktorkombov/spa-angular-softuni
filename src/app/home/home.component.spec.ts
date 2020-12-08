import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGuestsComponent } from './home-guests.component';

describe('HomeGuestsComponent', () => {
  let component: HomeGuestsComponent;
  let fixture: ComponentFixture<HomeGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGuestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
