import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActusAgendaListComponent } from './actus-agenda-list.component';

describe('ActusAgendaListComponent', () => {
  let component: ActusAgendaListComponent;
  let fixture: ComponentFixture<ActusAgendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActusAgendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActusAgendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
