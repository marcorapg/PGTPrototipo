import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atualizacaounidadefamiliar } from './atualizacaounidadefamiliar';

describe('Atualizacaounidadefamiliar', () => {
  let component: Atualizacaounidadefamiliar;
  let fixture: ComponentFixture<Atualizacaounidadefamiliar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atualizacaounidadefamiliar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atualizacaounidadefamiliar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
