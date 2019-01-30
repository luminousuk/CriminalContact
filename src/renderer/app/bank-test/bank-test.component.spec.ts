import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTestComponent } from './bank-test.component';

describe('BankTestComponent', () => {
  let component: BankTestComponent;
  let fixture: ComponentFixture<BankTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
