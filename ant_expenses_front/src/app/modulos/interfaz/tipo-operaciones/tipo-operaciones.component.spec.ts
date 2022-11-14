import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOperacionesComponent } from './tipo-operaciones.component';

describe('TipoOperacionesComponent', () => {
  let component: TipoOperacionesComponent;
  let fixture: ComponentFixture<TipoOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoOperacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
