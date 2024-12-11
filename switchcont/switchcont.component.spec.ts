import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcontComponent } from './switchcont.component';

describe('SwitchcontComponent', () => {
  let component: SwitchcontComponent;
  let fixture: ComponentFixture<SwitchcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchcontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
