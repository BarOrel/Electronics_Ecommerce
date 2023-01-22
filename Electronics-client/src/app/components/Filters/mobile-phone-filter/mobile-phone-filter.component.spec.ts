import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhoneFilterComponent } from './mobile-phone-filter.component';

describe('MobilePhoneFilterComponent', () => {
  let component: MobilePhoneFilterComponent;
  let fixture: ComponentFixture<MobilePhoneFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePhoneFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePhoneFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
