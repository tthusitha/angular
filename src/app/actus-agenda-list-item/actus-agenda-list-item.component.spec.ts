import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActusAgendaListItemComponent } from './actus-agenda-list-item.component';

describe('ActusAgendaListItemComponent', () => {
  let component: ActusAgendaListItemComponent;
  let fixture: ComponentFixture<ActusAgendaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActusAgendaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActusAgendaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
