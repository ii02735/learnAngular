import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignementDirectivesComponent } from './assignement-directives.component';

describe('AssignementDirectivesComponent', () => {
  let component: AssignementDirectivesComponent;
  let fixture: ComponentFixture<AssignementDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignementDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignementDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
