import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atualizacaosituacao } from './atualizacaosituacao';

describe('Atualizacaosituacao', () => {
  let component: Atualizacaosituacao;
  let fixture: ComponentFixture<Atualizacaosituacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atualizacaosituacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atualizacaosituacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
