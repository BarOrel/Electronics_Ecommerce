import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobilePhoneComponent } from './Add-MobilePhone.component';

describe('AddMobilePhoneComponent', () => {
  let component: AddMobilePhoneComponent;
  let fixture: ComponentFixture<AddMobilePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMobilePhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMobilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
