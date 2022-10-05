import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorosolComponentComponent } from './corosol-component.component';

describe('CorosolComponentComponent', () => {
  let component: CorosolComponentComponent;
  let fixture: ComponentFixture<CorosolComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorosolComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorosolComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
