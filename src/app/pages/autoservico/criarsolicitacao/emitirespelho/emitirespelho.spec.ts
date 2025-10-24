import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emitirespelho } from './emitirespelho';

describe('Emitirespelho', () => {
  let component: Emitirespelho;
  let fixture: ComponentFixture<Emitirespelho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emitirespelho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emitirespelho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
