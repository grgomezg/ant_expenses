import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RUsuarioComponent } from './r-usuario.component';

describe('RUsuarioComponent', () => {
  let component: RUsuarioComponent;
  let fixture: ComponentFixture<RUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
