import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeHomeComponent } from './tree-home.component';

describe('TreeHomeComponent', () => {
  let component: TreeHomeComponent;
  let fixture: ComponentFixture<TreeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
