import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReopenPageComponent } from './reopen-page.component';

describe('ReopenPageComponent', () => {
  let component: ReopenPageComponent;
  let fixture: ComponentFixture<ReopenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReopenPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReopenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
