import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcuentasComponent } from './editarcuentas.component';

describe('EditarcuentasComponent', () => {
  let component: EditarcuentasComponent;
  let fixture: ComponentFixture<EditarcuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarcuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
