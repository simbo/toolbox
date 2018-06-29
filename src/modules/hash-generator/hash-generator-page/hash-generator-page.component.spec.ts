import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashGeneratorPageComponent } from './hash-generator-page.component';

describe('HashGeneratorPageComponent', () => {
  let component: HashGeneratorPageComponent;
  let fixture: ComponentFixture<HashGeneratorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashGeneratorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
