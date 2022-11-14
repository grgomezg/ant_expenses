import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupararClaveComponent } from './recuparar-clave.component';

describe('RecupararClaveComponent', () => {
  let component: RecupararClaveComponent;
  let fixture: ComponentFixture<RecupararClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecupararClaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecupararClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
