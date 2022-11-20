import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarcuentasComponent } from './eliminarcuentas.component';

describe('EliminarcuentasComponent', () => {
  let component: EliminarcuentasComponent;
  let fixture: ComponentFixture<EliminarcuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarcuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarcuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
