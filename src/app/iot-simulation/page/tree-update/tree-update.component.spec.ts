import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeUpdateComponent } from './tree-update.component';

describe('TreeUpdateComponent', () => {
  let component: TreeUpdateComponent;
  let fixture: ComponentFixture<TreeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
