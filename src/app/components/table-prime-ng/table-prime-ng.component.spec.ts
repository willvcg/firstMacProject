import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrimeNgComponent } from './table-prime-ng.component';

xdescribe('TableComponent', () => {
  let component: TablePrimeNgComponent;
  let fixture: ComponentFixture<TablePrimeNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePrimeNgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TablePrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
