import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Criarsolicitacao } from './criarsolicitacao';

describe('Criarsolicitacao', () => {
  let component: Criarsolicitacao;
  let fixture: ComponentFixture<Criarsolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Criarsolicitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Criarsolicitacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
