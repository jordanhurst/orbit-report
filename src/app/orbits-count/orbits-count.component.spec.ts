import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitsCountComponent } from './orbits-count.component';

describe('OrbitsCountComponent', () => {
  let component: OrbitsCountComponent;
  let fixture: ComponentFixture<OrbitsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
