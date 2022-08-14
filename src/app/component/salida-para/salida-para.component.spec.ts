import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaParaComponent } from './salida-para.component';

describe('SalidaParaComponent', () => {
  let component: SalidaParaComponent;
  let fixture: ComponentFixture<SalidaParaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaParaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalidaParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
