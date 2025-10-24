import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atualizacaodadospessoais } from './atualizacaodadospessoais';

describe('Atualizacaodadospessoais', () => {
  let component: Atualizacaodadospessoais;
  let fixture: ComponentFixture<Atualizacaodadospessoais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atualizacaodadospessoais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atualizacaodadospessoais);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
