import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transferenciaassentamento } from './transferenciaassentamento';

describe('Transferenciaassentamento', () => {
  let component: Transferenciaassentamento;
  let fixture: ComponentFixture<Transferenciaassentamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transferenciaassentamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transferenciaassentamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
