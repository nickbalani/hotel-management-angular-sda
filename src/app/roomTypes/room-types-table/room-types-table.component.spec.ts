import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypesTableComponent } from './room-types-table.component';

describe('RoomTypesTableComponent', () => {
  let component: RoomTypesTableComponent;
  let fixture: ComponentFixture<RoomTypesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomTypesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
