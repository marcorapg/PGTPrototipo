import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitacaogerada } from './solicitacaogerada';

describe('Solicitacaogerada', () => {
  let component: Solicitacaogerada;
  let fixture: ComponentFixture<Solicitacaogerada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solicitacaogerada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solicitacaogerada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
