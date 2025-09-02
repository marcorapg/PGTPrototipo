import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autoservico } from './autoservico';

describe('Autoservico', () => {
  let component: Autoservico;
  let fixture: ComponentFixture<Autoservico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autoservico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Autoservico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
