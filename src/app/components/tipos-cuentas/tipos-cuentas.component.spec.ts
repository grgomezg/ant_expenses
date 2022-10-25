import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposCuentasComponent } from './tipos-cuentas.component';

describe('TiposCuentasComponent', () => {
  let component: TiposCuentasComponent;
  let fixture: ComponentFixture<TiposCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposCuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
