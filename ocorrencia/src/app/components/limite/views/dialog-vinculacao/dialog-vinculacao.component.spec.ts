import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVinculacaoComponent } from './dialog-vinculacao.component';

describe('DialogVinculacaoComponent', () => {
  let component: DialogVinculacaoComponent;
  let fixture: ComponentFixture<DialogVinculacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVinculacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVinculacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
