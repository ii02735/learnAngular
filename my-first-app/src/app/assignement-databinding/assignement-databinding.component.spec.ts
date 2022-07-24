import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignementDatabindingComponent } from './assignement-databinding.component';

describe('AssignementDatabindingComponent', () => {
  let component: AssignementDatabindingComponent;
  let fixture: ComponentFixture<AssignementDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignementDatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignementDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
