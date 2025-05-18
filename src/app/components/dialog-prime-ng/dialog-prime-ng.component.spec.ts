import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPrimeNgComponent } from './dialog-prime-ng.component';

describe('DialogPrimeNgComponent', () => {
  let component: DialogPrimeNgComponent;
  let fixture: ComponentFixture<DialogPrimeNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPrimeNgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
