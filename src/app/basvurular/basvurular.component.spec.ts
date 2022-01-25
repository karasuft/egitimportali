import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasvurularComponent } from './basvurular.component';

describe('BasvurularComponent', () => {
  let component: BasvurularComponent;
  let fixture: ComponentFixture<BasvurularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasvurularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasvurularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
