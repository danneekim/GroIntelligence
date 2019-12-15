import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryLinkComponent } from './industry-link.component';

describe('IndustryLinkComponent', () => {
  let component: IndustryLinkComponent;
  let fixture: ComponentFixture<IndustryLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
