import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acompanharsolicitacoes } from './acompanharsolicitacoes';

describe('Acompanharsolicitacoes', () => {
  let component: Acompanharsolicitacoes;
  let fixture: ComponentFixture<Acompanharsolicitacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acompanharsolicitacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acompanharsolicitacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
